import { setCartLocalStorage } from "../helpers/functions";
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
    case types.DELETE_ONE_PRODUCT_CART:
      return{
        ...state,
        cart: action.payload
      }
    case types.CLEAR_CART:
      return {
        ...state,
        cart: []
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
  const productCarNoDuplicates = products.cart.map(ele =>{ 
    return ele.id === id 
    ?{
      ...ele, quantity: ele.quantity + 1
    }
    : ele
  })
  const productCartInitial = [...products.cart, {...product, quantity: 1}]
  const newProductsCart = itemCart 
  ? productCarNoDuplicates
  : productCartInitial
  dispatch(addCart(newProductsCart))
  setCartLocalStorage(newProductsCart)
}
export const addCart = (product) => ({
  type: types.ADD_PRODUCT_CART,
  payload: product
})

export const deleteProductCart = (id) => (dispatch, selector) =>{
  const {products} = selector(state => state)
  const product = products.cart.find(ele => ele.id === id)
  const productsCartDelete = products.cart.map(ele => {
    return ele.id === id
    ? {...ele, quantity: ele.quantity - 1}
    : ele
  })
  const filterProduct = products.cart.filter(ele => ele.id !== product.id)
  const newProductsCart = product.quantity > 1
  ? productsCartDelete
  : filterProduct
  dispatch(deleteProduct(newProductsCart))
  setCartLocalStorage(newProductsCart)
}
const deleteProduct = (product) => ({
  type: types.DELETE_ONE_PRODUCT_CART,
  payload: product
})