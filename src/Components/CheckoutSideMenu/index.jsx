import  { useContext }  from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { ShoppingCartContext } from '../../Context'
const CheckoutSideMenu = () => {
    
    const context = useContext(ShoppingCartContext)
    

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='text-xl font-bold text-black'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-red-700 cursor-pointer' 
                    onClick={() => context.closeCheckoutSideMenu()}/>
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu
