import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GithubContextProvider } from "../context/GithubContext";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <GithubContextProvider>
          <Routes>
            <Route path='/' index element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/notfound' index element={ <NotFound /> } />
            <Route path='/*' index element={ <NotFound /> } />
          </Routes>
      </GithubContextProvider>
    </BrowserRouter>
  )
}

export default Router