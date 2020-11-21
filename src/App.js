// import  './static/style.css';
// import {MenuLayout } from './component/menu';
import {Footer } from './component/footer';

import {Header} from './component/header';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

const App = () => {
  return (
    <Router>
    <Header/>
     {/* <MenuLayout/> */}
     <BaseRouter />
     
     <Footer/>
    </Router>
  );
}

export default App;
