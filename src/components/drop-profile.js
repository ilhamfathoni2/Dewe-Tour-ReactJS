import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userLogin from '../srassets/UserLogin.png'
import user2 from '../srassets/user2.png'
import pay from '../srassets/bill1.png'
import logoutIcon from '../srassets/logout1.png'
import tripIcon from '../srassets/journey1.png'

function DropdownProfile() {
    return (
        <>
            <Dropdown>
            <Dropdown.Toggle className="dropdown-after-login" id="dropdown-basic">
                <img src={userLogin} alt="user" id="dropdown-basic"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link to="/profile">
                        <img className="icon-after-login" src={user2} alt="Profil" />
                        <b className="b-user-log" >Profile</b>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/payment">
                        <img className="icon-after-login" src={pay} alt="Pay" />
                        <b className="b-user-log" >Pay</b>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/trip">
                        <img className="icon-after-login" src={tripIcon} alt="Pay" />
                        <b className="b-user-log" >Trip</b>
                    </Link>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item>
                    <Link to="/logout">
                        <img className="icon-after-login" src={logoutIcon} alt="Logout" />
                        <b className="b-user-log" >Logout</b>
                    </Link>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
    );
}
  
export default DropdownProfile;