import * as React from "react";

import {
  FaPhone,
  FaFacebookF,
  FaSkype,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const user = {
  id: 1,
  fullname: "Tran Vi Khan",
  image: "https://i.pravatar.cc/200?img=4",
  position: "Developer",
  gender: "Male",
  birthDay: "Jun 06,1999",
  phone: "+84 974184717",
  email: "tranvikhan@gmail.com",
  skype: "live:tranvikhan",
  instagram: "tk.khan",
  facebook: "fb/tranvikhan",
};
const UserEditPage: React.FC = () => {
  return (
    <React.Fragment>
      <header className="my-8 px-4 py-12 rounded-xl bg-cover-image bg-cover	">
        <div className="flex flex-shrink space-x-8 transform md:translate-y-20 translate-y-16 items-center ">
          <div className="p-1 shadow-2xl bg-black bg-opacity-10 rounded-2xl backdrop-filter backdrop-blur-3xl">
            <img
              src={user.image}
              alt={user.fullname}
              className="md:w-48 md:h-48 w-24 h-24 object-cover rounded-xl"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-white font-black md:text-5xl text-2xl">
              {user.fullname}
            </h1>
            <h3 className="text-gray-50 font-medium  md:text-2xl text-lg">
              {user.position}
            </h3>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default UserEditPage;
