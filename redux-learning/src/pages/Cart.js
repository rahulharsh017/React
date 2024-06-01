import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{remove} from '../store/cartSlice.js'

function Cart() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)

  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='productsWrapper'>
           {
             products.map((product) =>(
              <div className='cartcard'>
                <img src={product.image} alt=""/>
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
              </div>
             ))
           }        
      </div>
    </div>
  )
}

export default Cart