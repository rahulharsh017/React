import React,{useState,useEffect} from 'react'
import { add } from '../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../store/ProductSlice'
import { Statuses } from '../store/ProductSlice'

function Products() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const {data:products,status}   = useSelector((state) => state.product)

    useEffect(() => {

        dispatch(fetchProducts())
        // const fetchProducts = async () => {
        // const res = await fetch('https://fakestoreapi.com/products')

        // const data = await res.json()

        // console.log(data);
        // setProducts(data)
        // }
        // fetchProducts()
    },[])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if(status === Statuses.LOADING){
        return <h1>Loading...</h1>
    }
  return (
    <div className='productsWrapper'>
        {products.map((product) => (
             <div className='card' key ={product.id}>
                <img src={product.image} />
                 <h4>{product.title}</h4>
                 <h5>{product.price}</h5>
                 <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
             </div>
        ))}
    </div>
  )
}

export default Products
