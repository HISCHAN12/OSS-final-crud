import "./App.css";
import CreateUser from "./components/User/CreateUser";
import ShowUser from "./components/User/ShowUser";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/User/EditUser";
import User from "./components/User/User";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./components/Layout/Home";
import ShowHandol from "./components/User/ShowHandol";
import Rank from "./components/User/Rank";
import Detail from "./components/User/Detail";


function App() {
  return (
    <div className="App steam-theme">
      <header className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/show-user" element={<ShowUser />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/rank/:id" element={<Detail />} />
            <Route path="/show-handol" element={<ShowHandol />} />
          </Routes>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;

