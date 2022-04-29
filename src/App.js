import { Routes, Route } from "react-router-dom"
import Landing from "./components/Landing"
import Detail from "./components/Datail"
import Form from "./components/Form"
import Home from "./components/Home"

function App () {

  return(
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/createCharacter" element={<Form />}/>
      </Routes>
    </div>
  )
}

export default App

























