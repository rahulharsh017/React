import {createSlice} from '@reduxjs/toolkit';



export const Statuses = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})


const productSlice = createSlice({
    name: 'product',
    initialState : {
        data:[],
        status:Statuses.IDLE,
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
       

    }
})

export const {setProducts,setStatus} = productSlice.actions
export default productSlice.reducer

export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(Statuses.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProducts(data))
            dispatch(setStatus(Statuses.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Statuses.ERROR))
        }
    }
}