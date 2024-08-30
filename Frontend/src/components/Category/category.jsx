import Category_item from "./Category_item"
import { useEffect, useState } from "react";
import "./Category.css";
import { message } from "antd";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categori`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchCategories();
  }, [apiUrl]);

  return (
    <section class="categories">
    <div class="container">
      <div class="section-title">
        <h2>Tüm Kategoriler</h2>
        <p>Yaz Koleksiyonu Yeni Morden Tasarımı</p>
      </div>
      <ul class="category-list">
      {categories.map((category) => (
        <Category_item key={category._id} category={category} />
          ))}
      </ul>
     
    </div>
  </section> 
    
  )
}

export default Category