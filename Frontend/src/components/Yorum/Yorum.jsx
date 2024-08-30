import YorumForum from "./YorumForum";
import YorumItem from "./YorumItem";
import propTypes from "prop-types";
import "./Yorum.css";
import { useEffect, useState } from "react";
import { message } from "antd";

const Yorum = ({active , singleProduct, setSingleProduct }) => {
  const [users, setUsers] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const thisReview = [];


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);


  singleProduct && singleProduct.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user);

    matchingUsers.forEach((matchingUser) => {
      thisReview.push({
        review: review,
        user: matchingUser,
      });
    });
  });


  
 
  

console.log(users);
  return (
    <>
         <div className={`tab-panel-reviews ${active}`}>
         {singleProduct && singleProduct.reviews.length > 0 ? (
        <>
          {/* <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3> */}
          <div className="comments">
            <ol className="comment-list">
              {thisReview.map((item, index) => (
                <YorumItem key={index} item={item}  reviewItem={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}
          {/* <!-- comment htmlForm start --> */}
          <div className="review-form-wrapper">
            <h2>Yorum Ekle</h2>
            <YorumForum singleProduct={singleProduct} setSingleProduct={setSingleProduct} />
          </div>
          
        </div>
    </>
  )
}

export default Yorum

Yorum.propTypes ={
  active: propTypes.string,
  singleProduct: propTypes.object,
  setSingleProduct: propTypes.func,
}