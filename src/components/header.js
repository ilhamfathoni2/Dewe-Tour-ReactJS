import { Link } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import Icon from '../srassets/Icon.png';
import DropdownProfile from './drop-profile';


function Headers() {
    const users = JSON.parse(localStorage.getItem("dataLogin"))

    if(users) {
      return (
        <>
          <header>
          <div className="hero-background-head">
              <div className="black-head">
                  <div className="container">
                    <Link to="/">
                      <img src={Icon} className="icon-web" alt="icon" />
                    </Link>
                    <DropdownProfile />
                  </div>
              </div>
          </div>
          </header>
        </>
      );
    } else {
      return (
        <>
          <header>
          <div className="hero-background-head">
              <div className="black-head">
                  <div className="container">
                    <Link to="/">
                      <img src={Icon} className="icon-web" alt="icon" />
                    </Link>
                    <Register />
                    <Login />
                  </div>
              </div>
          </div>
          </header>
        </>
      );
    }
}
  
export default Headers;
  