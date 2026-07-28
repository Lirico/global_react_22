



import React from 'react'

const Book = ({book}) => {
    const {title, author} = book;

    return (
        <>
            <li>
                <h4>{title}</h4>
                <h5>{author}</h5>
            </li>
        </>
    )
}

export default Book