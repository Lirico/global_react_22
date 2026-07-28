




import React from 'react'

const BookCard = ({product, addBook}) => {

    const {title} = product;

  return (
    <>
        <div>
            <h4>{title}</h4>
            <button onClick={() => addBook(product)}>Add</button>
        </div>
        <style jsx>{`
            div {
                width: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 2px solid black;
                padding: 10px 5px;
                margin: 10px;
            }
        `}</style>
    </>
  )
}

export default BookCard