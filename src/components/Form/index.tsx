import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { IProduct, iRequestError } from "../../interfaces/products.interfaces";
import { AxiosError } from "axios";
import { api } from "../../services/api";
import { StyledForm } from "./style";
import { toast } from "react-toastify";

export const Form = () => {
  const [file, setFile] = useState<File | null | undefined>(null);
  const [list, setList] = useState<IProduct[] | []>([]);
  const [fileHaveErrors, setFileHaveErrors] = useState<boolean>(true);

  useEffect(() => {
    if (Array.isArray(list) && list.length) {
      const hasErrors = list.some((product) => {
        return product.validatedDataErrors?.length > 0;
      });

      if (!hasErrors) {
        setFileHaveErrors(false);
      }
    }
  }, [list]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  const handleFileUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("inputUpload", file);
      formData.append("fileHaveErrors", String(fileHaveErrors));

      try {
        const resp = await api.post("/products/validate", formData);
        setList(resp.data);
        toast.success("Validação sem erros!");
      } catch (error) {
        const currentError = error as AxiosError<iRequestError>;
        const products = currentError.response?.data as unknown as IProduct[];
        if (Array.isArray(products) && products.length > 0) {
          setList(products);
        }
        setFileHaveErrors(true);
        toast.error("Um ou mais produtos possuem erros de validação!");
      }
    }
  };

  const handleUpdate = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("inputUpload", file);

      try {
        await api.patch("/products", formData);
        toast.success("Preços dos produtos atualizados!");
        setFile(null);
        setList([]);
        setFileHaveErrors(true);
      } catch (error) {
        toast.error("Ocorreu um erro ao atualizar os preços dos produtos!");
      }
    }
  };

  return (
    <StyledForm onSubmit={handleFileUpload} encType="multipart/form-data">
      <input type="file" name="inputUpload" onChange={handleFileChange} />
      <div className="div__buttons">
        <button type="submit">Validar</button>
        <button type="button" onClick={handleUpdate} disabled={fileHaveErrors}>
          Atualizar
        </button>
      </div>
      {list.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço Atual</th>
              <th>Novo Preço</th>
              <th>Validação</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product: IProduct) => (
              <tr key={product.product_code}>
                <td>{product.product_code}</td>
                <td>{product.name}</td>
                <td>
                  {product.actual_price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>
                  {product.new_price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>
                  <ul>
                    {product.validatedDataErrors.length > 0 ? (
                      product.validatedDataErrors.map((err: string) => (
                        <li key={crypto.randomUUID()}>{err}</li>
                      ))
                    ) : (
                      <li>OK</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </StyledForm>
  );
};

export default Form;
