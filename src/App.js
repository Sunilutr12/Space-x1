
import React from 'react'
import Header from './components/header'
import './style.css'
import{Launch} from './components/Launch/Launch'

function App() {
  return (
    <div className="App">
    
      <Header/>
      <Launch img="https://farm9.staticflickr.com/8637/16079045013_1f0fab9b54_o.jpg"
              title="FalconSat" 
              LaunchDate="2006-03-25T10:30:00+12:00"
              description="Engine failure at 33 seconds and loss of vehicle Engine failure at 33 seconds and loss of vehicle,Engine failure at 33 seconds and loss of vehicle Engine failure at 33 seconds and loss of vehicle,Engine failure at 33 seconds and loss of vehicle Engine failure at 33 seconds and loss of vehicle"/>

              <Launch img="https://farm9.staticflickr.com/8637/16079045013_1f0fab9b54_o.jpg"
              title="FalconSat" 
              LaunchDate="2006-03-25T10:30:00+12:00"
              description="Engine failure at 33 seconds and loss of vehicle Engine failure at 33 seconds and loss of vehicle,Engine failure at 33 seconds and loss of vehicle Engine failure at 33 seconds and loss of vehicle,Engine failure at 33 seconds and loss of vehicle Engine failure at 33 seconds and loss of vehicle"/>
    </div>
    
  );
}

export default App;
