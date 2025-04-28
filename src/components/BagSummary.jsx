import { useSelector } from "react-redux";

const BagSummary = () => {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter((item) => bagItems.includes(item.id))
    const totalItems = finalItems.length;
    const convenienceFee = 99;
    let totalMRP = 0, totalDiscount = 0, finalPayment = 0;
    finalItems.forEach(item => {
        totalMRP += item.original_price;
        totalDiscount += item.original_price - item.current_price;
        finalPayment += item.current_price;
    });
    finalPayment += 99;
   
    return (
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{convenienceFee}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    )
}
export default BagSummary;