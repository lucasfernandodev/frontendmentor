import React, { useState } from "react";
import { InterfacePurchase, InterfaceContextPurchase } from "../types/Purchase";

export const PurchaseContext = React.createContext<InterfaceContextPurchase>({} as InterfaceContextPurchase);

interface Props {
  children: React.ReactNode;
}

const PurchaseProvider: React.FC<Props> = ({children}) => {
  const [purchase, setPurchase] = useState({
    owner:{}
  } as InterfacePurchase)

  const updateItem = (item: Partial<InterfacePurchase>) => {
    setPurchase({...purchase, ...item})
  }

  return (
    <PurchaseContext.Provider value={{purchase, updateItem}}>
      {children}
    </PurchaseContext.Provider>
  )
}

export default PurchaseProvider;