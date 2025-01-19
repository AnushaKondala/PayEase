import SendMoney from "./pages/SendMoney"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/signIn" element={<SignIn/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/send" element={<SendMoney/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
