import  { useContext }  from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '..//../Components/OrderCard'
const CheckoutSideMenu = () => {
    
    const context = useContext(ShoppingCartContext)
    console.log('MY ORDER:', context.cardProducts)

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu h-auto flex-300 fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6 h-full'>
                <h2 className='text-xl font-bold text-black'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-red-700 cursor-pointer' 
                    onClick={() => context.closeCheckoutSideMenu()}/>
                </div>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            title={product.title}
                            imageUrl={product.imageUrl}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu
