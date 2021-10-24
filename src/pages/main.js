import Icon from '../srassets/Icon.png';

import Login from '../components/login';
import Register from '../components/register';
import Strenght from "../components/Strenght";
import Product from '../components/product';
import Footer from '../components/footer';
import DropdownProfile from '../components/drop-profile';

function Main() {
  return (
    <>
    <div className="hero-background">
        <div className="black">
            <div className="container">
                <img src={Icon} className="icon-web" alt="icon"/>
                <Register />
                <Login />
                <DropdownProfile />
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
    <h3>Group Tour</h3>
    <Product/>
    <Footer/>
    </>
  );
}

export default Main;
