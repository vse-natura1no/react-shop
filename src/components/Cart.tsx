import { cartProps } from "./interfaces"

export default function Cart({ orders, handleBasketShowing }: cartProps) {
    return <div className="cart bg-primary text-white text-center rounded-5" onClick={handleBasketShowing}>
        <i className="bi bi-bag"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {orders}
        </span>
    </div>
}