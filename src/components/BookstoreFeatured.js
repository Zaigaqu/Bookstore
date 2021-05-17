import DaVinciCode from "../images/DaVinciCode.jpg";
import "./BookstoreFeatured.css";

function BookstoreFeatured() {
  return (
    <div>
      <img src={DaVinciCode} className="photo" alt="Da Vinci Code" />
      <h2>Da Vinci Code by Dan Brown</h2>
      <h3>$9.95</h3>
    </div>
  );
}

export default BookstoreFeatured;
