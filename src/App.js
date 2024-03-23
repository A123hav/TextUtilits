
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




//function component
//Passing the props inside the navbar-->taking input to the component
function App() {
  const[mode, setMode] = useState('light'); //setting mode
  const [alert,setAlert] = useState(null);

const showAlert =(message,type) =>{
  setAlert({
    msg : message,
    type : type
  })
}


  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='grey';
      showAlert("dark mode has been enable","green");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // },2000);

      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1000);

    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("light mode has been enable");
      document.title = "TextUtils - Light Mode";
    }
  }
    return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alter={alert}/>
      
        <div className='container'>
          
        <Switch>

          <Route path="/about" element={<About/>}>
            <About />
          </Route>
          
          <Route path="/">
          <TextForm showAlert ={showAlert} headtag="Enter the txt to analyze" mode={mode}/>
         

          
          </Route>
        </Switch>
        
       
        
        </div>
        </Router>
       
    </>
  );
}

export default App;
