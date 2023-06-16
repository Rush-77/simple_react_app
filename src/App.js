import './App.css';
import AlertBox from './components/AlertBox';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React,{useState} from 'react';


function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode Enable.','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enable.','info');
    }
  }

  return (
    <>
          <Navbar title="Text-Util" mode={mode} toggleMode={toggleMode} />
          <AlertBox alert={alert}/>
          <TextBox heading="Drop The Text" mode={mode} showAlert={showAlert}/>
          {/* <About/> */}
    </>
  );
}

export default App;
