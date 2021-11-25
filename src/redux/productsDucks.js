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
    case types.ADD_PRODUCT_CART:
      return{
        ...state,
        cart: action.payload
      }
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


export const addProductCart = (id) => (dispatch, selector) => {
  const {products} = selector(state => state.products)
  const product = products.products.find(product => product.id === id)
  const itemCart = products.cart.find(productCart => productCart.id === id)


  dispatch(addCart(
    itemCart 
    ? products.cart.map(ele =>{ 
      return ele.id === id 
      ?{
        ...ele, quantity: ele.quantity + 1
      }
      : ele
    })
    : [...products.cart, {...product, quantity: 1}]
  ))

}
const addCart = (product) => ({
  type: types.ADD_PRODUCT_CART,
  payload: product
})