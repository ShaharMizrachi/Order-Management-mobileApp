export interface Product {
  id: number;
  name: string;
  lastPriceUsed?: number;
}

export interface Customer {
  id: number;
  name: string;
  address?: string;
}

export type RootStackParamList = {
  navigate(arg0: string): unknown;
  Main: undefined;
  customers_products_page?: {message: string};
  List_products?: undefined;
  List_customers?: undefined;
  customer_page?: {item: Customer};
  add_new_customer?: undefined;
};
