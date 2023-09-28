import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'


function Home () {

    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
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