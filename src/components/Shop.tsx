import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "./config"
import { shopItem, basketItem } from "./interfaces"

import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import Cart from "./Cart"
import BasketList from "./BasketList"
import Alert from "./Alert"

export default function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState<basketItem[] | []>([])
    const [isBasketShowing, setBasketShowing] = useState(false)
    const [alertName, setAlertName] = useState("")

    useEffect(() => console.log(order), [order])

    const handleBasketShowing = () => {
        setBasketShowing(!isBasketShowing)
    }

    const addToBusket = (item: shopItem) => {
        const itemIndex: number = order.findIndex((orderItem: basketItem) => orderItem.mainId === item.mainId)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }

            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem: basketItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })

            setOrder(newOrder)
        }
        setAlertName(item.displayName)
    }

    const removeFromBasket = (itemId: string) => {
        const newOrder = order.filter((el) => el.mainId !== itemId)
        setOrder(newOrder)
    }

    const incQuantity = (itemId: string) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else return el
        })
        setOrder(newOrder)
    }

    const decQuantity = (itemId: string) => {
        let newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else return el
        }).filter((el) => el.quantity > 0)
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName("")
    }

    useEffect(() => {
        console.log(process.env)
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            },
        })
            .then((responce) => responce.json())
            .then((data) => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })

    }, [])


    return <main className="content container overflow-hidden my-5 pt-4">
        <Cart orders={order.length} handleBasketShowing={handleBasketShowing} />
        {loading ? <Preloader /> : <GoodsList goods={goods} addToBusket={addToBusket} />}
        {isBasketShowing &&
            <BasketList
                order={order}
                handleBasketShowing={handleBasketShowing}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />}
        {alertName && <Alert alertName={alertName} closeAlert={closeAlert} />}
    </main>
}