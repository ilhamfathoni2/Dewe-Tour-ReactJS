import Icon from '../srassets/Icon.png';

import Login from './login';
import Register from './register';
import Strenght from "./Strenght";
import Product from './product';
import Footer from './footer';

function Main() {
  return (
    <>
    <div className="hero-background">
        <div className="black">
            <div className="container">
                <img src={Icon} className="icon-web" alt="icon"/>
                <Register />
                <Login />
                <div className="title-hero">
                    <h2 className="text-title">Explore</h2>
                    <h2 className="text-title-second">your amazing city together</h2>
                </div>
                <label className="label-form">Find great places to holliday</label>
                <div className="d-flex">
                    <input className="input-form" type="text" />
                    <button type="submit" className="btn-searach">Search</button>
                </div>
            </div>
        </div>
    </div>
    <Strenght/>
    <Product/>
    <Footer/>
    </>
  );
}

export default Main;
