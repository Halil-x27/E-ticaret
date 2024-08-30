import { useState } from "react";
import PropTypes from "prop-types";
import Yorum from "../Yorum/Yorum";
import "./Tabs.css";

const Tabs = ({ singleProduct, setSingleProduct }) => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (event, tab) =>{
    event.preventDefault();
    setActiveTab(tab);
  }
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a href="#" className={`tab-button ${activeTab === "desc" ? "active" : ""}`} onClick={(event)=> handleTabClick(event,"desc")} >
            Açıklama
          </a>
        </li>
        <li>
          <a href="#" className={`tab-button ${activeTab === "info" ? "active" : ""}`} onClick={(event)=> handleTabClick(event,"info")} >
            EK Bilgiler
          </a>
        </li>
        <li>
          <a href="#" className={`tab-button ${activeTab === "reviews" ? "active" : ""}`} onClick={(event)=> handleTabClick(event,"reviews")} >
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div className={`tab-panel-descriptions content ${activeTab === "desc" ? "active": "" } `} id="desc">
        <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: singleProduct.description }}
          ></div>
        </div>
        <div className={`tab-panel-information content ${activeTab === "info" ? "active":""}`} id="info">
          <h3>EK BİLGİLER</h3>
          <table>
            <tbody>
              <tr>
                <th>Renk</th>
                <td>
                  <p>
                  Kırmızı, Portakal, Mavi, Yeşil, Pembe, Siyah, Beyaz
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                <p>
                    {singleProduct.sizes.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}
                        {index < singleProduct.sizes.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Yorum active={activeTab === "reviews" ? "content active" : "content"}  singleProduct={singleProduct}
         setSingleProduct={setSingleProduct}/>
        
      </div>
    </div>
  );
};

export default Tabs;
Tabs.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};