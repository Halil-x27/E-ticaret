import PropTypes from "prop-types";
import "./Category_İtem.css";

function Category_item({category}) {
  return (
   
   
      <li class="category-item">
        <a href="#">
          <img src={category.img} alt="" class="category-image"/>
          <span className="category-title">{category.name}</span>
        </a>
      </li>
      
   
 
  )
}

export default Category_item;

Category_item.propTypes = {
  category: PropTypes.object,
};
