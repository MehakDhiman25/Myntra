import BagSlice from "./BagSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import itemSlice from "./ItemSlice";
import {configureStore} from "@reduxjs/toolkit"

const myntraStore = configureStore({
    reducer : {
        items : itemSlice.reducer,
        fetchStatus: FetchStatusSlice.reducer,
        bag: BagSlice.reducer
    }
})

export default myntraStore;

