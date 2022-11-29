import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' index element={ <Navbar /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Router