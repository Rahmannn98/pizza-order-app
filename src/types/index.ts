export interface Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  offer?: boolean;
  allowedToppings: number[];
}

export interface Size {
  id: number;
  name: string;
  priceModifier: number;
}

export interface Topping {
  id: number;
  name: string;
  price: number;
}

export interface OrderState {
  selectedPizza: Pizza | null;
  selectedSize: Size | null;
  selectedToppings: Topping[];
  pizzas: Pizza[];
  sizes: Size[];
  toppings: Topping[];
  isLoading: boolean;
}
