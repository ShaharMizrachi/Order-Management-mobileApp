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

export interface ProductOrder {
  product: Product;
  amount: number;
}

export interface OrderPerCustomer {
  customer: Customer;
  productOrder: ProductOrder[];
}

export interface Order {
  orderPerCustomer: OrderPerCustomer[];
  date: Date;
}

export type RootStackParamList = {
  navigate(arg0: string): unknown;
  Main: undefined;
  customers_products_page?: {message: string};
  List_products?: undefined;
  List_customers?: undefined;
  customer_page?: {item: Customer};
  add_new_customer?: undefined;
  new_order?: undefined;
};
