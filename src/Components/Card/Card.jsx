
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = ( data ) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        

    }

    return (
        <div className='bg-white cursor-pointer w-11/12 h-80 shadow-xl rounded-lg ' 
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5 rounded-lg '>
                <span className='absolute color-grey-50 rounded-lg bg-white/60 px-4 py-0.5 m-1 bottom-0 left-0 text-xs color-black '>{ data.data.category.name }</span>
                <img className=' rounded-t-lg w-full h-full object-cover' src={data.data.images[0]} alt={data.data.title} />
                <span 
                className='absolute top-0 right-0 bg-white/60 w-6 h-6 rounded-full m-2 flex justify-center items-center text-M p-0'
                onClick={(event) => addProductToCart(event, data.data)}>
                <PlusIcon  className='w-6 h-6 text-green-400' />
                </span>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light px-2'>{ data.data.title }</span>
                <span className='text-lg font-medium px-2'>${data.data.price}</span>
            </p>

        </div>
    )
}

export default Card