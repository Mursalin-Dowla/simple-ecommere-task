import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import SowUser from './components/ShowUser/SowUser';
import Cart from './components/Cart/Cart';
import AdminLogin from './components/AdminLogin/AdminLogin';
import RequireAdminAuth from './components/RequireAdminAuth/RequireAdminAuth';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/cart' element={
          <RequiredAuth>
            <Cart />
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/recoverpassword' element={<RecoverPassword />}></Route>
        <Route path='/users' element={
          <RequireAdminAuth>

            <SowUser />
          </RequireAdminAuth>
         
        }></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
