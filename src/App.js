import BookstoreFeatured from "./components/Bookstore/BookstoreFeatured";
import BookstoreItems from "./components/Bookstore/BookstoreItems";
import Header from "./components/Layout/Header";
import BOOKS from './Data/Books_Data';
import MOVIES from './Data/Movies_Data';

const App = () => {
  return (
    <div>
      <Header />
      <BookstoreFeatured />
      <BookstoreItems books={BOOKS} movies={MOVIES} />
    </div>
  );
};

export default App;
