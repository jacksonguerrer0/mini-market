import types from "./types/types";

// Variables
const initialState = {
  products: [],
  productsCart: []
}


// Reducer
const productsDucks = (state= initialState, action) =>{
  switch (action.type) {
    case types.getProducts:
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
  type: types.getProducts,
  payload: products
})
