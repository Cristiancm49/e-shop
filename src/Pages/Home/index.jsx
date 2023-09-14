import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card/Card'
import ProductDetail from '../../Components/ProductDetail'


function Home () {
    const [items,  setItems] =  useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    return (
        <Layout>
            <div className='grid gap-4 px-5 grid-cols-2 w-full max-w-screen-lg lg:grid-cols-4'>
                {
                    items?.map(item => (<Card key={item.id} data={item} />))
                }
            </div>
            <ProductDetail />

        </Layout>
    )
}

export default Home