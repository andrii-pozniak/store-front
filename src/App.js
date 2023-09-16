import './App.css';
import { Route, Routes } from "react-router-dom";
import  HomePage from "./pages/HomePage";
import  Category from "./pages/Category";
import  Product from "./pages/Product";
import {Guarantee} from "./pages/Guarantee/Guarantee"
import  {SharedLayout} from "./SharedLayout/SharedLayout";
import { Contacts } from "./pages/Contacts/Contacts";
import { PaymentDelivery } from "../src/pages/PaymentDelivery/PaymentDelivery";
import { Stock } from './pages/Stock/Stock';
import { Wholesale } from './pages/Wholesale/Wholesale';
import { RegisterPage } from './pages/Auth/RegisterPage';
import { LoginPage } from './pages/Auth/LoginPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="category/:categoryName" element={<Category/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='paymentDelivery' element={<PaymentDelivery/>}/>
        <Route path='guarantee' element={<Guarantee/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='stock' element={<Stock/>}/>
        <Route path='wholesale' element={<Wholesale/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
      </Route>
    </Routes>
 
    </>
   
  );
}

export default App;
