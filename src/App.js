import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "./Component/Button";
import Home from "./Pages/Home";
import Layout from "./Component/Layout";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route without the layout */}
        <Route path="/" element={<Home />} />

        {/* Route with the layout */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        {/* Add other routes that require the layout */}
      </Routes>
    </Router>
  );
}

export default App;
