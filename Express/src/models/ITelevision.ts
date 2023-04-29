export interface ITelevision {
  id?: number;
  name: string;
  description: string;
  make: string;
  price: number;
  screenSize: number;
}

export interface ICreatedTelevision {
  data: ITelevision;
}

export interface IUpdateTelevision {
  data: ITelevision;
}
