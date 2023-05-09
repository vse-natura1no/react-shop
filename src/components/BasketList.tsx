import BasketItem from "./BasketItem";
import { basketItem, basketListProps } from "./interfaces";

export default function BasketList({ order, handleBasketShowing, removeFromBasket, incQuantity, decQuantity }: basketListProps) {

    const totalPrice = (order as any[]).reduce((sum: number, el: basketItem) => {
        return sum + el.finalPrice * el.quantity
    }, 0)

    return <div className="card basket-list">
        <div className="card-header d-flex justify-content-between align-items-center px-3">
            <h4 className="m-0">Корзина</h4>
            <i className="bi bi-x" onClick={handleBasketShowing}></i>
        </div>
        <ul className="list-group list-group-flush">
            {order.length ?
                order.map((item) =>
                    <BasketItem
                        key={item.mainId}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />)

                : <li className="list-group-item">Корзина пуста</li>}
            <li className="list-group-item bg-success-subtle fs-5 py-3">Общая стоимость заказа: {totalPrice} V-bucks</li>
        </ul>
    </div>
}