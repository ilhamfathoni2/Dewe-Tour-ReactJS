import Pay from '../components/pay';
import Headers from '../components/header';
import Footer from '../components/footer';
import Confirm from '../components/confirm-pay';


function Payment() {
    return (
      <>
        <Headers />
            <Pay />
            <div className="container d-flex justify-content-end mb-10 mt-5">
              <Confirm />
            </div>
        <Footer />
      </>
    );
  }
  
export default Payment;
  