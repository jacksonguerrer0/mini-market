import axios from 'axios'


export const getDataApi = async () => {
  const res = await axios.get('https://api-guapjolotas-2021.vercel.app/productos')
  const data =  res.data
  return data
}