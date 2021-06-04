import * as React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Button } from "@progress/kendo-react-buttons";
import { Input, InputChangeEvent } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import Sniper from "../components/sniper";
import useStore from "../hook/mobxHook";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { loading, error } = useStore();
  return (
    <Sniper loading={loading}>
      <React.Fragment>
        <div className=" bg-gray-50 shadow">
          <AppBar className="md:container md:mx-auto px-4 py-3 bg-gray-50 shadow-none">
            <AppBarSection>
              <Link
                to="/"
                className="text-xl font-bold text-blue-400 hover:text-blue-500 hover:no-underline"
              >
                DEMO APP
              </Link>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection>
              <Input
                className="w-32 lg:w-96 md:w-60 rounded-full pl-3 pr-4 leading-none	border-none	bg-gray-200 text-sm"
                onChange={(e: InputChangeEvent) => {
                  console.log(e.value);
                }}
              />
              <span className="k-icon k-i-search rounded-full transform -translate-x-7"></span>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection className="space-x-3">
              <Link
                to="/new"
                className="text-xl font-bold text-blue-400 hover:text-blue-black hover:no-underline"
              >
                <Button icon="plus" className="rounded-full "></Button>
              </Link>

              <BadgeContainer>
                <Button icon="notification" className="rounded-full "></Button>
                <Badge shape="dot" themeColor="warning" />
              </BadgeContainer>
            </AppBarSection>
          </AppBar>
        </div>

        <div className="md:container md:mx-auto px-4">{props.children}</div>
      </React.Fragment>
    </Sniper>
  );
};
export default observer(MainLayout);
