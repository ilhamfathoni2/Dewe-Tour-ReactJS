import Login from '../components/login';
import Register from '../components/register';
import Icon from '../srassets/Icon.png';
import DropdownProfile from './drop-profile';


function Headers() {
    return (
      <>
        <header>
        <div className="hero-background-head">
            <div className="black-head">
                <div className="container">
                    <img src={Icon} className="icon-web" alt="icon" />
                    <Register />
                    <Login />
                    <DropdownProfile />
                </div>
            </div>
        </div>
        </header>
      </>
    );
  }
  
export default Headers;
  