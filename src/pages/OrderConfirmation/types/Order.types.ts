export type Order = {
  total: number;
  items: [
    {
      id: number;
      name: string;
      price: number;
    }
  ];
};
