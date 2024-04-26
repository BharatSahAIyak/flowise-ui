import React from "react";
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { CustomRoutes } from "ra-core/dist/cjs";
import { Route } from "react-router";
import App from "App";
import theme from "themes";

const ReactAdminProvider = () => {
  return (
    <Admin dataProvider={dataProvider} theme={theme}>
      <Resource name="flowise" list={App} edit={() => <p>edit</p>} />
      {/* <CustomRoutes>
        <Route path="/flowise" element={<App />} />
      </CustomRoutes> */}
    </Admin>
  );
};

export default ReactAdminProvider;
