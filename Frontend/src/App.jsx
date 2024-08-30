import Anasayfa from "./Anasayfa/Anasayfa";
import Magaza from "./Anasayfa/Magaza";
 import BlogPage from "./Anasayfa/BlogPage";
import ContactPage from "./Anasayfa/ContactPage";
import AuthPage from "./Anasayfa/AuthPage";
import CartPage from "./Anasayfa/CartPage";
import BlogDetayPage from "./Anasayfa/BlogDetayPage";
import ProductDetayPage from "./Anasayfa/ProductDetayPage";
import {Route,Routes } from "react-router-dom";
import UserPage from "./Anasayfa/Admin/UserPage";
import CategoryPage from "./Anasayfa/Admin/Categori/CategoriPage";
import UpdateCategoryPage from "./Anasayfa/Admin/Categori/UpdateCategory";
import CreateCategoryPage from "./Anasayfa/Admin/Categori/CategoryCreate";
import ProductPage from "./Anasayfa/Admin/Product/ProductPage";
import CreateProductPage from "./Anasayfa/Admin/Product/ProductCreate";
import UpdateProductPage from "./Anasayfa/Admin/Product/UpdateProductPage";
import CouponPage from "./Anasayfa/Admin/Kupon/KuponPage";
import CreateKuponPage from "./Anasayfa/Admin/Kupon/CreateKuponPage";
import UpdateKuponPage from "./Anasayfa/Admin/Kupon/UpdateKuponPage";
import Success from "./Anasayfa/Succes";
import OrderPage from "./Anasayfa/Admin/OrderPage";
import DashboardPage from "./Anasayfa/DashboardPage";

import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa/>}/>
      <Route path="/Mağaza" element={<Magaza/>}/>
      <Route path="/Blog" element={<BlogPage/>}/>
      <Route path="/İletişim" element={<ContactPage/>}/>
      <Route path="/Kart" element={<CartPage/>}/>
      <Route path="/Login" element={<AuthPage/>}/>
      <Route path="/Blog/:id" element={<BlogDetayPage/>}/>
      <Route path="/Product/:id" element={<ProductDetayPage/>}/>
      <Route path="/success" element={<Success />} />
     
      <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categori" element={<CategoryPage />} />
        <Route path="categori/create" element={<CreateCategoryPage />} />
        <Route path="categori/update/:id" element={<UpdateCategoryPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/create" element={<CreateProductPage />} />
        <Route path="product/update/:id" element={<UpdateProductPage />} />
        <Route path="kupons" element={<CouponPage />} />
        <Route path="kupons/create" element={<CreateKuponPage />} />
        <Route path="kupons/update/:id" element={<UpdateKuponPage/>} />
        <Route path="orders" element={<OrderPage />} />

        
      </Route>
    </Routes>
  );
}

export default App;
