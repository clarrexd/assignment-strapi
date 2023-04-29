export interface IMobile {
  id?: number;
  name: string;
  description: string;
  make: string;
  price: number;
  screen: string;
}

export interface ICreatedMobile {
  data: IMobile;
}

export interface IUpdateMobile {
  data: IMobile;
}
