import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Error from "../pages/NotFound/index";
import Pokemons from "../pages/Pokemons";

function Routers() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notfound" element={<Error />} />
            /*<Route path="/pokemons" element={<Pokemons />} />*/
            <Route path="/pokemon/:id" element={<Pokemons />} />
        </Routes>
    );
}

export default Routers;