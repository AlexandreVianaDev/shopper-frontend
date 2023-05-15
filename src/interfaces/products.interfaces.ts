export interface IProduct {
  actual_price: string | number;
  name: string;
  product_code: string | number;
  validatedDataErrors: string[];
  new_price: string | number;
}

export interface iRequestError {
  error: string;
  response: iRequestErrorResponse | undefined;
}

export interface iRequestErrorResponse {
  data: string | undefined | IProduct[];
}
