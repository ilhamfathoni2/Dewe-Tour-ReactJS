import React, { useState } from "react";
import Headers from "../components/header"
import Footer from "../components/footer";
import imgHead from '../srassets/d11.png'
import img1 from '../srassets/d112.png'
import img2 from '../srassets/d113.png'
import img3 from '../srassets/d114.png'

import iconHotel from '../srassets/hotel.png'
import iconMeal from '../srassets/meal.png'
import iconAirplan from '../srassets/airplan.png'
import iconDate from '../srassets/date.png'
import iconDuration from '../srassets/duration.png'


const Details = () => {
  
    const [ count, setCount ] = useState(1);
    
    const increment = () => {
      setCount(count + 1);
    }
    const decrement = () => {
      setCount(count <= 1 ? count : count - 1);
    }

    const totalCount = 12000000 * count;
    let prices = totalCount.toString().split('').reverse().join(''),
        totalPrice = prices.match(/\d{1,3}/g);
        totalPrice = totalPrice.join('.').split('').reverse().join('');
  
    return (
      <>
        <Headers />
        <div className="container">
          <div className="img-detail">
            <h1 className="bold mt-5">6D/4N Fun Tassie Vacation + Sydney</h1>
            <h5 className="mb-3">Australia</h5>
            <img src={imgHead} alt="img" />
          </div>
          <div className="img-child mt-3 mb-4">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
          </div>
          <h4 className="bold mt-5 mb-3">Information Trip</h4>

          <div className="info-trip mt-4">
            <div className="info-item">
              <h6>Accommodation</h6>
              <div className="item-2">
                <img className="icon-info" src={iconHotel} alt="img" />
                <h5 className="title-info">Hotel 4 Nights</h5>
              </div>
            </div>
            <div className="info-item">
              <h6>Transportation</h6>
              <div className="item-2">
                <img className="icon-info" src={iconAirplan} alt="img" />
                <h5 className="title-info">Qatar Airways</h5>
              </div>
            </div>
            <div className="info-item">
              <h6>Eat</h6>
              <div className="item-2">
                <img className="icon-info" src={iconMeal} alt="img" />
                <h5 className="title-info">Included as ltinerary</h5>
              </div>
            </div>
            <div className="info-item">
              <h6>Duration</h6>
              <div className="item-2">
                <img className="icon-info" src={iconDuration} alt="img" />
                <h5 className="title-info">6 Days 4 Night</h5>
              </div>
            </div>
            <div className="info-item">
              <h6>Date Trip</h6>
              <div className="item-2">
                <img className="icon-info" src={iconDate} alt="img" />
                <h5 className="title-info">26 Agustus 2020</h5>
              </div>
            </div>
          </div>

          <h5 className="bold mt-5">Description</h5>
          <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
        <div className="container">
            <div className="input-group">
              <h4 className="price-details mb-2">IDR. 12.000.000 / Person</h4>
              <input type="button" value="-" onClick={decrement}  className="button-minus" data-field="quantity"/>
              <input type="number" value={count} name="quantity" className="quantity-field" />
              <input type="button" value="+" onClick={increment} className="button-plus" data-field="quantity"/>
            </div>
        <hr/>
        <div className="container">
          <div className="total-price">
            <h4 className="bold">Total :</h4>
            <h4 className="price-detail">IDR. {totalPrice}</h4>
          </div>
        </div>
        <hr/>
        <div className="container">
          <div className="btn-flex-end">
            <button className="btn btn-warning mt-3 mb-4"><b className="text-white">BOOK NOW</b></button>
          </div>
        </div>
        </div>
        <Footer/>
      </>
    );
}
  
export default Details;