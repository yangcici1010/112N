import './App.css';
import Booklist_xx from './components/Booklist_xx';
import Book_xx from './components/Book_xx';

// functional component
const App = () => {
  return (
    <ThreeBooks />
  );
};

const Book = () => {
  return (
    <article className='book'>
      <img
        src='https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg'
        alt=''
      />
      <h1>Build the Life You Want: The Art and Science of Getting Happier</h1>
      <h4> Arthur C. Brook</h4>
    </article>
  );
};
const ThreeBooks = () => {
  return (
    <section className='booklist'>
      <Book_xx
        key='1'
        img='https://m.media-amazon.com/images/I/81UIdE+tquL._SL1500_.jpg'
        title='Things We Left Behind (Knockemout Series, 3) Paperback'
        author='Arthur C. Brook'
      />
      <Book_xx
        key='2'
        img='https://m.media-amazon.com/images/I/61gvFBWZb3L._SL1200_.jpg' title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Arthur C. Brook'
      />
      <Book_xx
        key='3'
        img='https://m.media-amazon.com/images/I/815oQ6G6HDL._SL1500_.jpg' title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Ms. Kate Howard  '
      />
      <Book_xx
        key='4'
        img='https://m.media-amazon.com/images/I/81UIdE+tquL._SL1500_.jpg'
        title='Things We Left Behind (Knockemout Series, 3) Paperback'
        author='Arthur C. Brook'
      />
      <Book_xx
        key='5'
        img='https://m.media-amazon.com/images/I/61gvFBWZb3L._SL1200_.jpg' title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Arthur C. Brook'
      />
      <Book_xx
        key='6'
        img='https://m.media-amazon.com/images/I/815oQ6G6HDL._SL1500_.jpg' title='Build the Life You Want: The Art and Science of Getting Happier'
        author='Ms. Kate Howard  '
      />
    </section>
  );
};


export default App;
