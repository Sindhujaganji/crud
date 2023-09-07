import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import HomePage from "./components/HomePage";
import UpdateUser from "./components/UpdateUser";
import ViewUser from "./components/ViewUser";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/view/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

