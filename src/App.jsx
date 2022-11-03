import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Scanner from './components/Scanner';
import LOGO from './assets/Kolkata_Thunderbolts_official_logo.png'
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// import './App.css'

const mapStyles = {
  width: "100%",
  height: "100%",
};

function App() {
  const [count, setCount] = useState(0)
  const [latitute, setlatitute] = useState(null);
  const [longtitude, setlongtitude] = useState(null);
  const [qr_result, setqr_result] = useState(null)

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
      <div className=" text-center">
        <img
          style={{ width: "100px", height: "100px" }}
          className=""
          src={LOGO}
        />
        <h2 className="main-heading">Ball Tracking System</h2>
      </div>

      <Scanner
      
        fps={10}
        qrbox={200}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <div className="row justify-content-md-center p-4">
        {qr_result && <div className="col p-4 m-2 location-wrapper">
          
            <h2 className="small-header">
              Scanned Result <span className="scanned"> {qr_result}</span>
            </h2>
        </div>
          }
          

        {longtitude && (
          <div className="col p-4 m-2 location-wrapper">
            <h2 className="small-header">Your Current Location</h2>
            <div className="mt-4">
              <h3 className="location">Latitude : {latitute}</h3>
              <h3 className="location">Longtitude : {longtitude}</h3>
            </div>
          </div>
        )}
      </div>

      {/* <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: latitute,
            lng: longtitude,
          }}
        >
          <Marker
            position={{ lat: latitute, lng: longtitude }}
            name={"You Are Here"}
          />
        </Map>
      </div> */}
    </div>
  );
}

export default App
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCJ93bv8-XgalSZ8Pu28r472Lq0ZwCHtuY",
// })(App);
