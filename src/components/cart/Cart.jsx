import { useContext } from 'react'
import { CartContext } from '@/context/CartContextProvider'
import Product from './Product';
import Item from './Item';

const Cart = () => {

  const {products, cart, clearCart, addToCart, removeFromCart} = useContext(CartContext);


  return (
    <>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <div className="box grid-responsive">
          {
            products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
          }
        </div>
        <h3>Carrito</h3>
        <div className="box">
          {
            cart.map((item, index) => <Item key={index} item={item} removeFromCart={removeFromCart} />)
          }
        </div>
        <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  )
}

export default Cart

