import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrders from "../MyOrders"
import MyOrder from "../MyOrder"
import SignIn from "../SignIn"
import NotFound from "../NotFound"
import NavBar from "../../Components/Navbar"
import { ShoppingCartProvider } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ]) 

  return routes
}

function App() {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
