export interface StatusTypes{
    success: boolean,
    error: boolean,
    noVerificate: boolean,
    pending: boolean

}
interface date{
  day: string,
  month: string,
  year: number
}
export interface initialState {
    name: string,
    email: string,
    number: string,
    date: date,
    sex: string,
    country: string,
  };
  export interface FormState {
    form: initialState
    setForm: (arg: string) => void
  }

 export interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
  }

export interface Products {
  title: string;
  id: number;
  category: string;
  brand: string;
  price: number;
  images: string[];
  description: string;
  stock: number;
}
  


export interface PropsProductsItems {
  value: string
  products: Products[]
  basketProducts: Products[] | any
  setBasket: (item) => void
}
