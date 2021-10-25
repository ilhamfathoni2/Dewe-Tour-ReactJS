// import { useContext } from 'react';

function Addnewtrip() {

    const handleTrip = (e) => {
        e.preventDefault()

        const title = document.getElementById("title-trip").value
        const country = document.getElementById("country").value
        const accommodation = document.getElementById("accommodation").value
        const transportation = document.getElementById("transportation").value
        const day = document.getElementById("day").value
        const night = document.getElementById("night").value
        const dateTrip = document.getElementById("date-trip").value
        const price = document.getElementById("price").value
        const quota = document.getElementById("quota").value
        const desc = document.getElementById("desc").value
        const image = document.getElementById("image").value

        const trip = {
            title,
            country,
            accommodation,
            transportation,
            day,
            night,
            dateTrip,
            price,
            quota,
            desc,
            image,
        }
        
        let itemArray = localStorage.getItem('dataTrip') ? JSON.parse(localStorage.getItem('dataTrip')) : []
        itemArray.push(trip)
        
        localStorage.setItem('dataTrip', JSON.stringify(itemArray))
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleTrip}>
                <div className="mb-3">
                    <label className="form-label"><b>Title Trip</b></label>
                    <input type="text" className="form-control" id="title-trip" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Country</b></label>
                    <select className="form-select" id="country">
                        <option selected>Chose</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Amerika">Amerika</option>
                        <option value="Arab">Arab</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Accommodation</b></label>
                    <input type="text" className="form-control" id="accommodation" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Transportation</b></label>
                    <input type="text" className="form-control" id="transportation" />
                </div>
                <div className="mb-1">
                    <label className="form-label"><b>Duration</b></label>
                </div>
                <div className="mb-3">
                    <input type="text" className="input-2" id="day" />
                    <label className="form-label mar-5"><b>Day</b></label>
                    <input type="text" className="input-2" id="night" />
                    <label className="form-label"><b>Night</b></label>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Date Trip</b></label>
                    <input type="date" className="form-control" id="date-trip" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Price</b></label>
                    <input type="number" className="form-control" id="price" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Quota</b></label>
                    <input type="number" className="form-control" id="quota" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Description</b></label>
                    <textarea className="form-control" id="desc" ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Image</b></label>
                    <input type="file" className="form-control" id="image" />
                </div>
                <button type="submit" className="btn btn-warning mt-5 mb-10 add-trip">Add New Trip</button>
            </form>
        </div>
    );
}
  
export default Addnewtrip;
  