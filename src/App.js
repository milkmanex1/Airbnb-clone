import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NumberProvider } from "./NumberContext.js";

function App() {
  return (
    <div className="App">
      <NumberProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/search" element={<SearchPage></SearchPage>} />
            <Route path="/" element={<Home></Home>} />
          </Routes>
          <Footer></Footer>
        </Router>
      </NumberProvider>

      {/* HOME */}

      {/* header */}

      {/* banner */}
      {/* search dates */}

      {/* cards */}

      {/* footer */}

      {/* Search Page */}
      {/* test comment */}
    </div>
  );
}

export default App;
