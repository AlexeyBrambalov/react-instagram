import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://upload.wikimedia.org/wikipedia/en/2/28/Deep_Fried_Man_portrait_-_real_name_Daniel_Friedman_-_South_African_Comedian.jpg"
        alt="Man"
        name="some_cool_man"
      />
      <Palette />
    </div>
  );
};

export default Profile;
