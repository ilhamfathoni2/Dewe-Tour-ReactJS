import profilIcon from '../srassets/icon-profil.png'
import emailIcon from '../srassets/email.png'
import phoneIcon from '../srassets/Phone.png'
import mapIcon from '../srassets/map.png'
import Avatar from '../srassets/Avatar.png'

function Personal() {
    return (
        <div className="container d-flex justify-content-center">

            <div className="card col-sm-7 mt-5">
                <div className="card-body p-4">
                    <h3 className="card-title text-p">Personal Info</h3>

                    <div className="d-flex justify-content-end">
                        <img className="avatar" src={Avatar} alt="avatar" />
                    </div>
                    
                    <div class="row mt-2">
                        <div class="col-sm-1 p-0">
                            <div class="card-body">
                                <img src={profilIcon} alt="icon" />
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="card-body">
                                <h6><b>Barak Obama</b> <br/>
                                <p>Full Name</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-1 p-0">
                            <div class="card-body">
                                <img src={emailIcon} alt="icon" />
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="card-body">
                                <h6><b>obama@gmail.com</b> <br/>
                                <p>Email</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-1 p-0">
                            <div class="card-body">
                                <img src={phoneIcon} alt="icon" />
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="card-body">
                                <h6><b>082000232220</b><br/>
                                <p>Mobile Phone</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-1 p-0">
                            <div class="card-body">
                                <img src={mapIcon} alt="icon" />
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="card-body">
                                <h6><b>Jl. Ahmad Yani No.10 Surabaya</b> <br/>
                                <p>Address</p>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end m-0 p-0">
                        <button class="btn btn-warning col-5">Change Photo Profil</button>
                    </div>
                </div>
            </div>

        </div>
    );
  }
  
export default Personal;
  