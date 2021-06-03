import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import AppRouter from "./router/router";

const App: React.FC = () => {
  const user: Array<any> = new Array(100).fill(1, 0, 99);
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  );
};
export default App;
