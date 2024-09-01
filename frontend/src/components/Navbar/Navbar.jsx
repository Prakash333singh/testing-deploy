import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
// import Dropdown from '../Dropdown/Dropdown';
import Search from '../Search/Search';
import UserDetail from '../UserDetail/UserDetail';
import SidebarWithBurgerMenu from './SideBar';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const products = useSelector(state => state.cartData.products)
  return (
    <div className='navbar bg-slate-400'>
      <div className="wrapper">
        <div className='left'>
          <div className="items-center hidden x-sm:flex z-50">
            <SidebarWithBurgerMenu />
          </div>

          <div className="item cat" >
            {/* <Dropdown /> */}
          </div>
          <div className='text-3xl'>
            <Link to="/">Patronix</Link>
          </div>
        </div>

        <div className='right'>
          <div className="icons flex items-center">
            <div onClick={() => setSearch(!search)}>
              <SearchIcon />
            </div>
            <UserDetail />

            <div className="carticon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart open={open} setOpen={setOpen} />}
      {search && <Search setSearch={setSearch} />}
    </div>
  )
}

export default Navbar

