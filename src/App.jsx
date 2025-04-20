import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
