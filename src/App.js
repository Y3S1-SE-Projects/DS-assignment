import { Route, BrowserRouter as Routes } from "react-router-dom";
import GoogleAPI from "./components/GoogleAPI";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GoogleAPI />} />
    </Routes>
  );
}
export default App;
