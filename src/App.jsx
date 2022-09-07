
import { BrowserRouter,Route,Routes} from "react-router-dom"
import { Home } from "./telas/Home"
import { Login } from "./telas/Login"

function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
