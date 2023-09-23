import { useState } from 'react';
import { books_data } from './books_data';
import Book_xx from './Book_xx';

const Booklist_xx = () => {
    console.log('books_data', books_data);
    const [books, setBooks] = useState(books_data);
    return (
        <section className='booklist'>
            {books.map((book) => {
                const { id, img, title, author } = book;
                return <Book_xx key={id} img={img}
                    title={title}
                    author={author} />
            })}
        </section>
    );
};
export default Booklist_xx;