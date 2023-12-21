import { Routes, Route } from "react-router-dom";
import Products from "./Products";

const Welcome = () => {

return(
  <section>
    <div>
      <h1>The Welcome Page</h1>
     </div>
     <Routes>
        <Route path="/" element={<p>welcome new user</p> } />
     </Routes>
  </section>
    )
    
}

export default Welcome;