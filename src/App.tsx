import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import AppRouter from "./router/router";
import { Provider } from "mobx-react";
import userStore from "./mobx/userStore";

const App: React.FC = () => {
  const user: Array<any> = new Array(100).fill(1, 0, 99);
  return (
    <Provider store={userStore}>
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
