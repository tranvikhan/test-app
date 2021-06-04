import * as React from "react";
import moment from "moment";
import {
  FaPhone,
  FaFacebookF,
  FaSkype,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { useParams } from "react-router";
import useStore from "../hook/mobxHook";
import { observer } from "mobx-react";
interface Params {
  id: string;
}
const UserDetailPage: React.FC = () => {
  const { user, getUser } = useStore();
  let { id } = useParams<Params>();
  React.useEffect(() => {
    if (id) getUser(id);
  }, [id]);
  return (
    user && (
      <React.Fragment>
        <header className="my-8 px-4 py-12 rounded-xl bg-cover-image bg-cover	">
          <div className="flex flex-shrink space-x-8 transform md:translate-y-20 translate-y-16 items-center ">
            <div className="p-1 shadow-2xl bg-black bg-opacity-10 rounded-2xl backdrop-filter backdrop-blur-3xl">
              <img
                src={user.image}
                alt={user.fullName}
                className="md:w-48 md:h-48 w-24 h-24 object-cover rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-white font-black md:text-5xl text-2xl">
                {user.fullName}
              </h1>
              <h3 className="text-gray-50 font-medium  md:text-2xl text-lg">
                {user.position}
              </h3>
            </div>
          </div>
        </header>
        <section className="md:mt-20 mt-8 grid gap-4 md:grid-cols-3 grid-cols-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <h1 className="text-gray-900 text-2xl font-medium mb-4">
              Information
            </h1>
            <ul className="space-y-6">
              <li className="border-l-4 space-y-2 pl-2 border-gray-400 rounded-tl-sm rounded-bl-sm">
                <h6 className="font-medium ">Fullname</h6>
                <p>{user.fullName}</p>
              </li>
              <li className="border-l-4 space-y-2 pl-2 border-gray-400 rounded-tl-sm rounded-bl-sm">
                <h6 className="font-medium ">Position</h6>
                <p>{user.position}</p>
              </li>
              <li className="border-l-4 space-y-2 pl-2 border-gray-400 rounded-tl-sm rounded-bl-sm">
                <h6 className="font-medium ">Gender</h6>
                <p>{user.gender}</p>
              </li>
              <li className="border-l-4 space-y-2 pl-2 border-gray-400 rounded-tl-sm rounded-bl-sm">
                <h6 className="font-medium ">Birthday</h6>
                <p>{moment(user.birthday).format("DD/MM/YYYY")}</p>
              </li>
            </ul>
          </div>
          <div className=" rounded-lg p-4 md:col-span-2 col-span-1">
            <h1 className="text-gray-900 text-2xl font-medium mb-4">Contact</h1>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-red-100 rounded-lg p-4 space-y-2 cursor-pointer hover:shadow-md">
                <FaPhone className="text-2xl text-red-400" />
                <h6 className="font-medium uppercase">Phone</h6>
                <p>{user.phone}</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 space-y-2 cursor-pointer hover:shadow-md">
                <FaPaperPlane className="text-2xl text-green-400" />
                <h6 className="font-medium uppercase">Email</h6>
                <p>{user.email}</p>
              </div>
              <div className="bg-indigo-100 rounded-lg p-4 space-y-2 cursor-pointer hover:shadow-md">
                <FaSkype className="text-2xl text-indigo-400" />
                <h6 className="font-medium uppercase">Skyle</h6>
                <p>{user.skype}</p>
              </div>

              <div className="bg-yellow-100 rounded-lg p-4 space-y-2 cursor-pointer hover:shadow-md">
                <FaInstagram className="text-2xl text-yellow-400" />
                <h6 className="font-medium uppercase">Instagram</h6>
                <p>{user.instagram}</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 space-y-2 cursor-pointer hover:shadow-md">
                <FaFacebookF className="text-2xl text-blue-400" />
                <h6 className="font-medium uppercase">Facebook</h6>
                <p>{user.facebook}</p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  );
};
export default observer(UserDetailPage);
