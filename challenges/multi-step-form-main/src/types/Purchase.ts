export type addOns = {
  name: string,
  price: number,
}

export type ownerType = {
  name: string,
  email: string,
  phone: number,
}


export interface InterfacePurchase{
  owner: ownerType,
  plain: {
    name: string,
    type: 'Monthly' | 'Yearly',
    price: number
  },
  'add-ons': addOns[]
}

export interface InterfaceContextPurchase{
  purchase: InterfacePurchase,
  updateItem: (item: Partial<InterfacePurchase>) => void
}
