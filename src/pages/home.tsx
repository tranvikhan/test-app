import * as React from "react";

import {
  Card,
  CardTitle,
  CardBody,
  CardImage,
  CardActions,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import useStore from "../hook/mobxHook";
import { UserData } from "../mobx/userStore";
import { observer } from "mobx-react";
const HomePage: React.FC = () => {
  const [visible, setVisible] = React.useState<UserData | null>(null);
  const {
    users,
    removeUser,

    editUser,

    getAllUser,
  } = useStore();

  const deleteUser = (user: UserData) => {
    setVisible(user);
  };
  React.useEffect(() => {
    getAllUser();
    return;
  }, []);
  return (
    <>
      {visible != null && (
        <Dialog title={"Please confirm"} onClose={() => setVisible(null)}>
          <p style={{ margin: "25px", textAlign: "center" }}>
            Are you sure you want to delete user: {visible.fullName} ?
          </p>
          <DialogActionsBar>
            <Button className="k-button" onClick={() => setVisible(null)}>
              No
            </Button>
            <Button
              className="k-button"
              onClick={() => {
                removeUser(visible.id);
                setVisible(null);
              }}
            >
              Yes
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}
      <div className="grid gap-4 my-8 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {users.map((item: UserData, i: number) => (
          <div
            key={i}
            className="hover:shadow-xl transition duration-200 ease-in-out "
          >
            <Card className="border-none shadow-sm rounded-lg ">
              <CardImage
                src={item.image}
                className="object-cover md:h-48 h-72"
              />
              <CardBody className="pb-0">
                <CardTitle className="text-lg mb-1 font-semibold text-gray-900">
                  <Link
                    to={"/view/" + item.id}
                    className="hover:no-underline hover:text-blue-400"
                  >
                    {item.fullName}
                  </Link>
                </CardTitle>
                <p className="text-sm text-gray-700"> {item.position}</p>
              </CardBody>
              <CardActions className="flex space-x-2 justify-between items-center px-3">
                <div className="flex space-x-1 items-center">
                  <Button
                    icon="heart"
                    look="clear"
                    className=" hover:text-blue-500"
                    onClick={() => {
                      editUser(item.id, { like: item.like + 1 });
                    }}
                  />
                  <div className="text-sm" style={{ marginTop: 2 }}>
                    {item.like}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={"/edit/" + item.id}
                    className="hover:no-underline hover:text-blue-400"
                  >
                    <Button
                      icon="edit"
                      look="clear"
                      className=" hover:text-yellow-500"
                    />
                  </Link>
                  <Button
                    icon="delete"
                    look="clear"
                    onClick={() => deleteUser(item)}
                    className=" hover:text-red-500"
                  />
                </div>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default observer(HomePage);
