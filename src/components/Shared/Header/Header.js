import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = ()=>{
    signOut(auth);
  }
    return (    
<nav className="bg-white  px-2  py-2.5">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" className="flex items-center">
        <img src={logo} className="h-6 mr-3" alt=" Logo" />
    </a>
    <div className="flex w-auto" id="navbar-default">
      <ul className="flex p-4 mt-0 mr-20 flex-row space-x-8  text-sm font-medium bg-white">
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/about'>Shop</Link>
        </li>
        <li>
        <Link to='/about'>Subscribe & Save</Link>
        </li>
        <li>
        <Link to='/about'>Bundle</Link>
        </li>
        <li>
        <Link to='/about'>Recipes</Link>
        </li>
        <li>
        <Link to='/about'>Find</Link>
        </li>
        <li>
        <Link to='/about'>More</Link>
        </li>
      </ul>
      <div className='ml-32 mr-20 flex'>
        <Link className='flex' to='/cart'>
        <FontAwesomeIcon className='text-[#ABC480] text-xl mt-3 mr-3' icon={faShoppingCart} />
      <div className='text-md font-semibold'>
        <p>62 USD</p>
        <p className='text-xs mt-[-5px] pt-0'>2 items</p>
      </div>
        </Link>  
        <Link to='/users'><FontAwesomeIcon className='text-[#ABC480] text-xl mt-3 mx-2 cursor-pointer' icon={faUserAlt} /></Link> 
      
      {user && <span><button className='bg-[#ABC480] text-white p-2 rounded-md' onClick={handleSignOut}>sign out</button></span>
}
      </div>
    </div>
  </div>
</nav>
    );
};

export default Header;