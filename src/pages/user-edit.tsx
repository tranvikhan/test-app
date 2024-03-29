import * as React from "react";
import UserForm from "../components/form/user-form";
const UserEditPage: React.FC = () => {
  return (
    <React.Fragment>
      <section className="my-16">
        <h1 className="text-gray-900 text-5xl font-bold mb-4">Edit User</h1>
        <UserForm type="edit" />
      </section>
    </React.Fragment>
  );
};
export default UserEditPage;
