export interface Product {
  id: number;
  name: string;
}

export interface Customer {
  id: number;
  name: string;
  address?: string;
}

export type RootStackParamList = {
  Main: undefined;
  customers_products_page: {message: string};
};
