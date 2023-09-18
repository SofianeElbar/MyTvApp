
import './App.css'
import {Search} from './components/Search'
import {useState} from 'react'




function App() {
  const[title, setTitle] = useState('The Maxi Deluxe Best Of TV Show App')
  const [btnText, setBtnText] = useState("What's all about ?")

  const handleClick = () => {
    if (btnText === "What's all about ?"){
      setBtnText("I've got it")
      setTitle("Dive into the crazyness of the TV show world")
    }else{
      setBtnText("What's all about ?")
      setTitle("The Maxi Deluxe Best Of TV Show App")
    }
  }
  
   
  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={handleClick}>{btnText}</button>
      <Search/>  
    </div>
  )
}


export default App


