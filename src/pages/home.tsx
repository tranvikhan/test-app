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
import Sniper from "../components/sniper";

const HomePage: React.FC = () => {
  const user: Array<number> = new Array(69).fill(1, 0, 68);
  return (
    <div className="grid gap-4 my-8 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
      {user.map((item, i) => (
        <div
          key={i}
          className="hover:shadow-xl transition duration-200 ease-in-out "
        >
          <Card className="border-none shadow-sm rounded-lg ">
            <Sniper loading={true}>
              <CardImage
                src={`https://i.pravatar.cc/200?img=${i + 1}`}
                className="object-cover md:h-48 h-72"
              />
              <CardBody className="pb-0">
                <CardTitle className="text-lg mb-1 font-semibold text-gray-900">
                  <Link
                    to={"/view/" + (i + 1)}
                    className="hover:no-underline hover:text-blue-400"
                  >
                    Display Name
                  </Link>
                </CardTitle>
                <p className="text-sm text-gray-700">developer</p>
              </CardBody>
              <CardActions className="flex space-x-2 justify-between items-center px-3">
                <div className="flex space-x-1 items-center">
                  <Button
                    icon="heart"
                    look="clear"
                    className=" hover:text-blue-500"
                  />
                  <div className="text-sm" style={{ marginTop: 2 }}>
                    10
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    icon="edit"
                    look="clear"
                    className=" hover:text-yellow-500"
                  />
                  <Button
                    icon="delete"
                    look="clear"
                    className=" hover:text-red-500"
                  />
                </div>
              </CardActions>
            </Sniper>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
