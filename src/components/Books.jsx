import { useState, useEffect } from "react"
import Book from "./Book"
import BookCard from "./BookCard";




const initialState = []
const initialStateProducts = [
    {
        id: "1",
        title: "El principito",
        author: "Antoine de Saint-Exupéry"
    },
    {
        id: "2",
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling"
    },
    {
        id: "3",
        title: "El Señor de los Anillos: La Comunidad del Anillo",
        author: "J.R.R. Tolkien"
    },
    {
        id: "4",
        title: "Cien años de soledad",
        author: "Gabriel García Márquez"
    },
    {
        id: "5",
        title: "1984",
        author: "George Orwell"
    },
    {
        id: "6",
        title: "Fahrenheit 451",
        author: "Ray Bradbury"
    },
    {
        id: "7",
        title: "Ficciones",
        author: "Jorge Luis Borges"
    },
    {
        id: "8",
        title: "Rayuela",
        author: "Julio Cortázar"
    }
];

const Books = () => {

    const [books, setBooks] = useState(initialState)
    const [products, setProducts] = useState(initialStateProducts)

    // Para nosotros poder disparar efectos secundarios al detectar
    // un cambio de estado o incluso al detectar que la pagina
    // recarga, utilizamos un hook llamado useEffect.

    // Argumento 1 -> funcion, argumento 2 -> estado
    useEffect(() => console.log("Libro agregado a la lista"), [books])


    const addBook = (product) => setBooks((prev) => {
        return [
            ...prev,
            product
        ]
    })

    return (
        <>
            <h2>Lista de libros</h2>
            <ul>
                {
                    books.map(book =>
                        <Book
                            key={book.id}
                            book={book}
                        />)
                }
            </ul>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    products.map((product, index) => 
                        <BookCard 
                            key={index} 
                            product={product} 
                            addBook={addBook}
                        />)
                }
            </div>

            <form>
                {/* title */}
                {/* author */}
                <button type="submit">Insertar libro</button>
            </form>
        </>
    )
}

export default Books





// useEffect viene a darnos la posibilidad de interactuar con la diferentes fases del CICLO DE VIDA de un COMPONENTE.