export interface goodsProps {
    mainId: string,
    displayName: string,
    displayDescription: string,
    price: price,
    displayAssets: displayAssets[]
    addToBusket: (item: shopItem) => void
}

interface price {
    finalPrice: number
}
interface displayAssets {
    background: string,
}

export interface basketItem {
    mainId: string,
    displayName: string,
    finalPrice: number,
    quantity: number
}

export interface shopItem {
    mainId: string,
    displayName: string,
    finalPrice: number
}

export interface goodsListProps {
    goods: goodsProps[]
    addToBusket: (item: shopItem) => void
}

export interface cartProps {
    orders: number,
    handleBasketShowing: () => void
}

export interface basketListProps {
    order: [] | basketItem[],
    handleBasketShowing: () => void,
    removeFromBasket: (itemId: string) => void,
    incQuantity: (itemId: string) => void,
    decQuantity: (itemId: string) => void
}

export interface basketItemProps {
    mainId: string,
    displayName: string,
    finalPrice: number,
    quantity: number,
    removeFromBasket: (itemId: string) => void
    incQuantity: (itemId: string) => void,
    decQuantity: (itemId: string) => void
}

export interface alertProps {
    alertName: string,
    closeAlert: () => void
}