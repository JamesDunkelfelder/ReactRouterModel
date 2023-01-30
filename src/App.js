import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>

          <li>
            <Link to="/booklist">BookList</Link>
          </li>
          <li>
            <Link to="/newbook">NewBook</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="book" element={<Book />} />
        <Route path="booklist" element={<BookList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newbook" element={<NewBook />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
