import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import Flowise from "./components/flowise/Flowise";

export const App = () => (
  <Admin>
    <Resource name="home" list={<>Hello there</>} />
    {/* <Resource name="flowise" list={<Flowise />} /> */}
    <CustomRoutes>
      <Route path="/flowise" element={<Flowise />} />
    </CustomRoutes>
  </Admin>
);
