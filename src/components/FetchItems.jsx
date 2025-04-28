import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { itemActions } from "../store/ItemSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(FetchStatusActions.markFetchingStarted())
        fetch('http://localhost:8080/items', { signal })
            .then(res => res.json())
            .then(({items}) => {
                 dispatch(FetchStatusActions.markFetchingDone())
                 dispatch(FetchStatusActions.markFetchingFinished())
                 dispatch(itemActions.addInitialItems(items[0]))
            });
        return () => {
            controller.abort();
        }
    }, [])
    return <></>
}

export default FetchItems;