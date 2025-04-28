import {createSlice} from "@reduxjs/toolkit"
const FetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState : {
        currentlyFetching : false,
        fetchingDone : false
    },
    reducers : {
        markFetchingDone: (state) => {
            state.fetchingDone = true;
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false;
        }
    }
})

export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;