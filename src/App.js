import BookstoreFeatured from "./BookstoreFeatured";
import BookstoreItems from "./BookstoreItems";

const BOOKS = [
  {
    id: "b1",
    title: "Flappy Dicks - Volume I",
    author: "Richard Johnson Sr.",
    year: 1969,
    description:
      "Consectetur duis pariatur deserunt ut aute in magna eu proident exercitation consectetur qui irure culpa.",
  },
  {
    id: "b2",
    title: "Flappy Dicks - Volume II",
    author: "Richard Willy Johnson Jr.",
    year: 1996,
    description: "Anim sint reprehenderit irure pariatur qui veniam excepteur.",
  },
  {
    id: "b3",
    title: "The Flappening - A Complete Guide to Flappy Dicks",
    author: "Harry Balz",
    year: 2000,
    description: "Labore consequat incididunt fugiat veniam et dolor dolore.",
  },
  {
    id: "b4",
    title: "The Flappening - Flappy Dicks Galore",
    author: "Harry Balz",
    year: 2008,
    description: "Cupidatat esse Lorem ad incididunidconsequat.",
  },
];

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <BookstoreFeatured />
      <BookstoreItems books={BOOKS} />
    </div>
  );
};

export default App;
