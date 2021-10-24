

function Addnewtrip() {
    return (
        <div className="container mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label"><b>Title Trip</b></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Country</b></label>
                    <select className="form-select">
                        <option selected>Chose</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Amerika">Amerika</option>
                        <option value="Arab">Arab</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Accommodation</b></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Transportation</b></label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-1">
                    <label className="form-label"><b>Duration</b></label>
                </div>
                <div className="mb-3">
                    <input type="text" className="input-2" />
                    <label className="form-label mar-5"><b>Day</b></label>
                    <input type="text" className="input-2" />
                    <label className="form-label"><b>Night</b></label>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Date Trip</b></label>
                    <input type="date" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Price</b></label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Quota</b></label>
                    <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Description</b></label>
                    <textarea class="form-control" ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label"><b>Image</b></label>
                    <input type="file" className="form-control" />
                </div>
                <button type="submit" className="btn btn-warning mt-5 mb-10 add-trip">Add New Trip</button>
            </form>
        </div>
    );
}
  
export default Addnewtrip;
  