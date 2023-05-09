import { goodsProps, shopItem } from "./interfaces"

export default function GoodsItem({ mainId, displayName, displayDescription, price, displayAssets, addToBusket }: goodsProps) {
    const finalPrice: number = price.finalPrice

    return <div className="card-wrapper">
        <div className="card px-0 rounded-4 item-card" id={mainId}>
            <img src={displayAssets[0].background} className="card-img-top rounded-top-4" alt="item" />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{displayName}</h5>
                    <p className="card-text">{displayDescription}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center action mt-4">
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={() =>
                            addToBusket({
                                mainId,
                                displayName,
                                finalPrice
                            })}>Купить</button>
                    <span>{finalPrice} V-bucks</span>
                </div>
            </div>
        </div>
    </div>
}