



const Item = ({item, removeFromCart}) => {

  const { name, price, id } = item;

  return (
    <div className="cart-item">
        <h4>{name}</h4>
        <h5>{price}</h5>
        <button onClick={() => removeFromCart(id)}>Eliminar uno</button>
        <button onClick={() => removeFromCart(id)}>Eliminar Todos</button>
    </div>
  )
}

export default Item