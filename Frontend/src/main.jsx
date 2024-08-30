
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from  "react-router-dom";
import { Layout } from './Layouts/Layouts.jsx';
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import KartProvider from './Context/KartProvider.jsx';
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import ScrollToTop from './components/Scroll/ScrollTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <ScrollToTop />
   <KartProvider>
    <Layout>
     <App/>
    </Layout>

  </KartProvider>
    
  </BrowserRouter>
 
    
 
)
