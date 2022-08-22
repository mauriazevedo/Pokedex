import { BrowserRouter } from "react-router-dom";
import Routers from './routers/routers';
import { GlobalStyles } from "./styles/GlobalStyles";
import "./fonts/SourceSansPro/SourceSansPro.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
