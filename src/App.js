import React,{useState} from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import InputOutput from './Components/InputOutput';
  
function App() {

  const [customername,setCustomerName]= useState([

    
  ])
  const [totaltip, setTip] = useState([ 
    0
  ])

    const AddCustomerName=(link)=>{
      setCustomerName([...customername,link])
    }

    const AddTip=(link)=>{
      setTip([...totaltip,link])
    }

  return (
    <>
    <Header/>
    <InputOutput customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip}/>
    <Footer/>
    
    </>
  );
}

export default App;
