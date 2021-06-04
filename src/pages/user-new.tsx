import * as React from "react";
import UserForm from "../components/form/user-form";
const NewUser: React.FC = () => {
  return (
    <React.Fragment>
      <section className="my-16">
        <h1 className="text-gray-900 text-5xl font-bold mb-4">New User</h1>
        <UserForm type="new" />
      </section>
    </React.Fragment>
  );
};
export default NewUser;
