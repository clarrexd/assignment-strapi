export interface IComputer {
  id?: number;
  name: string;
  description: string;
  make: string;
  price: number;
  processor: string;
}

export interface ICreatedComputer {
  data: IComputer;
}

export interface IUpdateComputer {
  data: IComputer;
}
