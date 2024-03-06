import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Container } from "react-bootstrap";

function App() {
  const theme = {
    light: {
      primary: "#191919",
      secondary: "#E3651D",
      tetiary: "#85586F",
      text: "rgba(0,0,0,0.7)",
      smallText: "rgba(225,225,225,1)",
    },
    size: {
      small: "13px",
      medium: "17px",
      large: "22px",
      extraLarge: "32px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>
      <div style={{ backgroundColor: "#191919" }}>
        <Container>
          <ThemeProvider theme={theme}>
            <ToastContainer />

            <RouterProvider router={router} />
          </ThemeProvider>
        </Container>
      </div>
    </>
  );
}

export default App;
