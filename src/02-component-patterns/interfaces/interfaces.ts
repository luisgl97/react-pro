
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
  }

export interface Product {
  id: string;
  title: string;
  img?: string;
}

