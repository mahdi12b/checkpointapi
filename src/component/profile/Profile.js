import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import HttpIcon from "@material-ui/icons/Http";
import PhoneIcon from "@material-ui/icons/Phone";
import './Profile.css'


const Profile = ({ user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card user-card">
            <div className="card-header">
              <h5>Profile</h5>
            </div>
            <div className="card-block">
              <div className="user-image">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="img-radius"
                  alt="User-Profile"
                />
              </div>
              <h5>
                <span className="person">
                  <PersonIcon />
                  <p> {user.name}</p>
                </span>
              </h5>
              <p className="f-w-600 m-t-25 m-b-10">
                Username : {user.username}
              </p>
              <p>
                {" "}
                <span className="person">
                  <HttpIcon />
                  <a href={user.website}>{user.website}</a>{" "}
                </span>
              </p>
              <h6>
                <span className="mail">
                  <EmailIcon />
                  <a href={user.email}> {user.email}</a>
                </span>
              </h6>
              <h6>
                <span className="mail">
                  <PhoneIcon />
                  {user.phone}
                </span>
              </h6>
              <hr />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile