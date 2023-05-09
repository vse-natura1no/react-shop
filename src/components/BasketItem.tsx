import { basketItemProps } from "./interfaces";

export default function BasketItem({ mainId, displayName, finalPrice, quantity, removeFromBasket, incQuantity, decQuantity }: basketItemProps) {
    if (quantity >= 1) return (
        <li className="fs-5 list-group-item d-flex justify-content-between align-items-center" >
            <div>
                {displayName}{" "}
                <i
                    className="bi bi-dash basket-icon px-2"
                    onClick={() => decQuantity(mainId)}
                >
                </i>
                {quantity} шт.
                <i
                    className="bi bi-plus basket-icon px-2"
                    onClick={() => incQuantity(mainId)}
                >
                </i>
            </div>

            <div>
                {finalPrice * quantity} V-bucks
                <i className="bi bi-x basket-icon ps-2" onClick={(() => removeFromBasket(mainId))}></i>
            </div>
        </li>)
    else return null
}