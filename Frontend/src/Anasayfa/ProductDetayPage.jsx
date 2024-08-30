import { useEffect, useState } from "react";
import ProductDetay from '../components/Product Detay/ProductDetay';
import { useParams } from "react-router-dom";

const ProductDetayPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/product/${productId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchSingleProduct();
  }, [apiUrl, productId]);

  console.log(singleProduct);
  return singleProduct ?(
    <ProductDetay singleProduct={singleProduct} setSingleProduct={setSingleProduct}  />
   
  ) : (
    <p>Ürün Yükleniyor</p>
  );
};

export default ProductDetayPage