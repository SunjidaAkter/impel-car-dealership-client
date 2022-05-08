import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import SignIn from './Components/Login/SignIn/SignIn';
import SignUp from './Components/Login/SignUp/SignUp';
import Blogs from './Components/Pages/Blogs/Blogs';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Pages/NotFound/NotFound';
import ManageInventories from './Components/Pages/ManageInventories/ManageInventories';
import AddNewItem from './Components/Pages/AddNewItem/AddNewItem';
import MyItems from './Components/Pages/MyItems/MyItems';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import About from './Components/Pages/About/About';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import SingleItem from './Components/Pages/SingleItem/SingleItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <SingleItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        } />
        <Route path="/addNewItem" element={<AddNewItem />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
