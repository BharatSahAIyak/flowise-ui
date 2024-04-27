import { Admin, Resource } from "react-admin";
import Flowise from "./components/flowise/Flowise";
import theme from "./themes";

const themeExtended = {
  ...theme,
  sidebar: {
    closedWidth: 0,
  },
};

export const App = () => (
  <Admin theme={themeExtended}>
    <Resource name="home" list={<>Hello there</>} />
    <Resource name="flowise" list={Flowise} />
    {/* <Resource name="flowise" list={<Flowise />} /> */}
    {/* <CustomRoutes>
      <Route path="/flowise" element={<Flowise />} />
    </CustomRoutes> */}
  </Admin>
);
