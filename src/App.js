import { Route , Routes, Outlet} from 'react-router-dom'
import Welcome from './components/Welcome';
import Products from './components/Products';
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

      <Routes>
           <Route path="/welcome" element={<Welcome/>}/>
           <Route path="/Products" element={<Products/>} />
      </Routes>

      
    </div>
  );
}

export default App;
