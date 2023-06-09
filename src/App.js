import './App.css';
import { Route, Routes } from "react-router-dom";
import  HomePage from "./pages/HomePage";
import  Category from "./pages/Category";
import  Product from "./pages/Product";
import  {SharedLayout} from "./SharedLayout/SharedLayout";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="category/:categoryName" element={<Category/>}/>
        <Route path='product' element={<Product/>}/>
      </Route>
    </Routes>
 
    </>
   
  );
}

export default App;
