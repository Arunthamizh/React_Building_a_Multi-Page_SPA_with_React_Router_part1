import { Route , Routes, Outlet} from 'react-router-dom'
import Welcome from './components/Welcome';
import Products from './components/Products';
import MainHeader from './components/MainHeader';
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
            <Route path="/Products" element={<Products/>} />
        </Routes>
      </main>

      
    </div>
  );
}

export default App;
