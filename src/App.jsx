import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Scanner from './components/Scanner';
import LOGO from './assets/Kolkata_Thunderbolts_official_logo.png'

// import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [latitute, setlatitute] = useState(null)
  const [longtitude, setlongtitude] = useState(null)
  const [qr_result, setqr_result] = useState('')

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

    setqr_result(decodedText);
     getLocation();
  }

  return (
    <div>
      <div className="row justify-content-md-center text-center">
        <img
          style={{ width: "130px", height: "120px" }}
          className="col-2"
          src={LOGO}
        />
        <h1 className="col-4">Ball Tracking System</h1>
      </div>

      <Scanner
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <div className="row justify-content-md-center">
        <div className="col text-center">
          {qr_result && (
            <h2>
              Scanned Result :<span className="scanned"> {qr_result}</span>
            </h2>
          )}
        </div>

        {longtitude && (
          <div className="col text-center ">
            <h2>Your Current Location </h2>
            <h3 className="location">Latitude : {latitute}</h3>
            <h3 className="location">Longtitude : {longtitude}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
