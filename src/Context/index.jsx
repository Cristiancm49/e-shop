import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)

    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])
    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
          {children}
        </ShoppingCartContext.Provider>
        
    )
}