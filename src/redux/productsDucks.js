import types from "./types/types";

// Variables
const initialState = {
  products: [],
  cart : []
}


// Reducer
const productsDucks = (state= initialState, action) =>{
  switch (action.type) {
    case types.GET_PRODUCTS:
    return {
      ...state,
      products: action.payload
    };
  
    default:
      return state;
  }
}
export default productsDucks




// Actions
export const saveProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products
})
