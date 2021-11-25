import axios from 'axios'


export const getDataApi = async () => {
  const res = await axios.get('https://api-guapjolotas-2021.vercel.app/productos')
  const data =  res.data
  return data
}

export const quantityDecimals = (num, quantity) => {
  if(num < quantity){
    return num
  }else{
    return quantity
  }
}
export const getTotalCart = (products) => {
  let total = 0
  products.forEach(ele => {
    total = (ele.quantity * ele.precio) +total
  });
  return total
}