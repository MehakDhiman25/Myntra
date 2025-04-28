import { useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";


const HomeItem = ({ item }) => {
    const bagItems = useSelector(store => store.bag)

    const dispatch = useDispatch()
    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id))
    }
    const handleRemoveFromBag = () => {
        dispatch(bagActions.removeFromBag(item.id))
    }
    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {bagItems.includes(item.id) ? <button type="button" className="btn-add-bag btn btn-danger" 
            onClick={handleRemoveFromBag}>Remove <MdDeleteOutline /></button> : <button type="button" className="btn-add-bag btn btn-success" 
            onClick={handleAddToBag}>Add To Bag</button>}
            
        </div>
    )
}
export default HomeItem;