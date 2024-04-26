import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import Sample from "./components/flowise/Sample";

export const App = () => (
  <Admin>
    <Resource name="" />
    <CustomRoutes>
      <Route path="/flowise" element={<Sample />} />
    </CustomRoutes>
  </Admin>
);
