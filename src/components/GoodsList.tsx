import GoodsItem from "./GoodsItem";
import { goodsListProps, shopItem } from "./interfaces";


export default function ({ goods, addToBusket }: goodsListProps) {

    if (!goods.length) {
        return <h3>Not found</h3>
    }

    return <div className="goods row row-cols-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-2">
        {goods.map((item) => <GoodsItem key={item.mainId} {...item} addToBusket={addToBusket} />)}
    </div>
}