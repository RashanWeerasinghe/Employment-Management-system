import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPeople from "./Components/AddPeople";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="AddPeople" element={<AddPeople />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
