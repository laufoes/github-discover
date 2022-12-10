import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertContextProvider } from "../context/AlertContext";
import { GithubContextProvider } from "../context/GithubContext";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <AlertContextProvider>
        <GithubContextProvider>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' index element={<NotFound />} />
            <Route path='/*' index element={<NotFound />} />
          </Routes>
        </GithubContextProvider>
      </AlertContextProvider>
    </BrowserRouter>
  )
}

export default Router