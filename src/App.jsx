import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Scanner from './components/Scanner';


// import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [latitute, setlatitute] = useState(0)
  const [longtitude, setlongtitude] = useState(0)

  function getLocation (){
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      setlatitute(position.coords.latitude);
      setlongtitude(position.coords.longitude);
    });
  }

  function onNewScanResult(decodedText, decodedResult) {
    // Handle the result here.
    console.log("success");
    console.log(decodedResult);
     getLocation();
  }

  return (
    <div>
      <h1>Location with QR Code example!</h1>
      <Scanner
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />

      <div>
        <h2>your current location is</h2>
        <p>latitude : {latitute}</p>
        <p>longtitude : {longtitude}</p>
      </div>
    </div>
  );
}

export default App
