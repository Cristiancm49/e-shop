import { NavLink } from 'react-router-dom'
import { useContext} from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

function NavBar () {
    
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='hidden lg:flex justify-between items-center top-0 fixed w-full lg:py-5 lg:px-8 lg:text-sm lg:font-light'>
            
            

            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        e-Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/' 
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        All 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearchByCategory('Clothes')}
                    to='/clothes' 
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearchByCategory('furnitures')} 
                    to='/furnitures'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearchByCategory('electronics')}
                    to='/electronics'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearchByCategory('toys')}
                    to='/toys'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() => context.setSearchByCategory('others')} 
                    to='/others'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        Others
                    </NavLink>
                </li>

            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    crsitan@gmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({isActive}) => 
                        isActive ? activeStyle: undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center justify-center'>
                  <ShoppingBagIcon className='w-6 h-6 mx-1' /> {context.cartProducts.length}
                </li>
                

            </ul>
        </nav>
    )
}

export default NavBar