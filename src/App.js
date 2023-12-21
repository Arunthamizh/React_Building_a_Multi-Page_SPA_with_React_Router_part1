import { Route , Routes} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
// import Routers from './components/Route';


function App() {
  return (
    <div>
      {/* <Route path="/welcome" >
        <Welcome />
      </Route>
      <Route path="/Products">
        <Products />
      </Route> */}
      {/* <Outlet /> */}
      {/* <Routers /> */}

      <MainHeader/>
      <main>
        <Routes>
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/products" element={<Products/>} exact />
            <Route path="/products/:productId" element={<ProductDetails/>} />
        </Routes>
      </main>

      
    </div>
  );
}

export default App;
