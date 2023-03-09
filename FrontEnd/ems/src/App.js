import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPeople from "./Components/AddPeople";
import Dashboard from "./Components/Dashboard";
import EditPeople from "./Components/EditPeople";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="AddPeople" element={<AddPeople />} />
          <Route path="EditPeople/:id" element={<EditPeople />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
