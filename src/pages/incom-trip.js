import { Link } from 'react-router-dom';
import Headers from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';

function IncomeTrip() {
    return (
      <>
        <Headers />
            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h4 className="incom-trip">Incoming Trip</h4>
                    <Link to="/add-trip">
                        <button className="btn btn-warning add-trip">Add Trip</button>
                    </Link>
                </div>
            </div>
            <Product />
        <Footer />
      </>
    );
  }
  
export default IncomeTrip;
  