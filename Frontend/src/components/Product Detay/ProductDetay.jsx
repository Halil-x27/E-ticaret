import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Gallery from "../Gallery/Gallery";
import PropTypes from "prop-types";
import Info from "../Info/Info";
import Tabs from "../Tabs/Tabs";
import "./ProductDetay.css";
const ProductDetay = ({ singleProduct, setSingleProduct }) => {
  return (
    <section class="single-product">
        <div class="container">
            <div class="single-product-wrapper">
                {/* <!-- breadcrumb start --> */}
                <BreadCrumb/>
                {/* <!-- breadcrumb end --> */}

                {/* <!-- site main start --> */}
                <div class="single-content">
                    <main class="site-main">
                    <Gallery singleProduct={singleProduct} />
                    <Info singleProduct={singleProduct} />
                    </main>
                </div>
                {/* <!-- site main end --> */}

                {/* <!-- tabs start --> */}
                <Tabs singleProduct={singleProduct} setSingleProduct={setSingleProduct} />
                {/* <!-- tabs end --> */}

            </div>
        </div>
    </section>
  )
}

export default ProductDetay;
ProductDetay.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};