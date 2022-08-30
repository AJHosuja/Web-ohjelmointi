import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeData from "./components/RecipeData";

function App() {
  return (
    <Router >
    
      <Navbar />
      <Routes>
      <Route path="/" element={
        <Content />
      }/>
     <Route path="/recipe/:id" element={
      <RecipeData />
      }/>
      </Routes>
    </Router>
  );
}

export default App;
