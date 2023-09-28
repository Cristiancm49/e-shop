import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'


function Home () {

    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <div className='w-full h-auto flex justify-center items-center mb-4'>
                <h1 className='text-black font-bold text-xl '>Exlusive products</h1>
            </div>
            <div className='w-80 h-auto flex justify-center items-center'>
                <input 
                type='text' 
                placeholder=' Name product' 
                className='focus:outline-none px-2 mb-3  w-11/12 h-8 rounded-lg cursor-pointer border-none'
                onChange={(e) => context.setSearchByTitle(e.target.value)}
                />
            </div>
            <div className='grid gap-4 px-5 grid-cols-2 w-full max-w-screen-lg lg:grid-cols-4'>
                {
                    context.items?.map(item => (<Card key={item.id} data={item} />))
                }
            </div>
            <ProductDetail />

        </Layout>
    )
}

export default Home