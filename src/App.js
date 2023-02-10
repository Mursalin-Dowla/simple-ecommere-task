import './App.css';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import Cart from './components/Cart/Cart';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import SowUser from './components/ShowUser/SowUser';

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
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/recoverpassword' element={<RecoverPassword />}></Route>
        <Route path='/users' element={<SowUser />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
