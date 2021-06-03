import * as React from "react";
import { BiLoaderCircle } from "react-icons/bi";
interface SnipProps {
  children: React.ReactNode;
  loading: boolean;
}
const Sniper: React.FC<SnipProps> = (props: SnipProps) => {
  return (
    <>
      {props.loading && (
        <div className="absolute top-0 left-0 bg-black z-50 bg-opacity-70  w-full h-full">
          <div className="w-full h-full flex justify-center items-center">
            <BiLoaderCircle className="text-5xl text-gray-100 animate-spin " />
          </div>
        </div>
      )}
      {props.children}
    </>
  );
};
export default Sniper;
