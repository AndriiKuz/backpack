import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "../components/main/Main";
import Season from "../components/season/Season";
import Weather from "../components/weather/Weather";
import Duration from "../components/duration/Duration";
import StuffList from "../components/stuffList/StuffList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/season" element={<Season />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/duration" element={<Duration />} />
          <Route path="/stuff-list" element={<StuffList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
