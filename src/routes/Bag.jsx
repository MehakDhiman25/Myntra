import BagItem from "../components/BagItem"
import BagSummary from "../components/BagSummary"
import { useSelector } from "react-redux";
import { BsBagXFill } from "react-icons/bs";

const Bag = () => {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter((item) => bagItems.includes(item.id))
    return (
        <main>
            <div className="bag-page">
                {finalItems.length === 0 ?
                    <h1 style={{ "margin": "80px 0" }}><center><BsBagXFill style={{ "font-size": "65px" }} /><div>Your Bag is Empty</div></center></h1>
                    :
                    <>
                        <div className="bag-items-container">
                            {finalItems.map((item) => <BagItem key={item.id} item={item} />)}
                        </div>
                        <BagSummary />
                    </>}
            </div>
        </main>)
}
export default Bag