
const InnerAir = (props) => {
  // console.log(' props in innerAir', props) // {aqi: value}

  if (props.aqi !== '') {
    var currAQI = props.aqi

    if (currAQI >= 0 && currAQI <= 50) {
      return (
        //
        <div className="currentAQI">
          <p>Your current Air Quality Index (AQI) is: <b className="aqi1" style={{'color': 'green', 'backgroundColor': 'white', 'font-size': '25px'}}> {currAQI} </b><button onClick={props.worstFinder}>Compare?</button><br></br>
          </p>
          <Comparer worstAir={props.worstAir}/>
        </div>
      )
    } else if (currAQI >= 51 && currAQI <= 100) {
      return (
        <div className="currentAQI">
          <p>Your current Air Quality Index (AQI) is <b className="aqi2" style={{'color': 'rgb(208, 208, 11)', 'font-size': '25px'}}>{currAQI}</b>  <button onClick={props.worstFinder}>Compare?</button><br></br>
          </p>
          <Comparer worstAir={props.worstAir}/>
        </div>
      )
    } else if (currAQI >= 101 && currAQI <= 150) {
      return (
        <div className="currentAQI">
          <p>Your current Air Quality Index (AQI) is <b className="aqi3" style={{'color': 'rgb(155, 96, 19)', 'font-size': '25px'}}>{currAQI}</b>  <button onClick={props.worstFinder}>Compare?</button><br></br>
          </p>
          <Comparer worstAir={props.worstAir}/>
        </div>
      )
    } else if (currAQI >= 151 && currAQI <= 200) {
      return (
        <div className="currentAQI">
          <p>Your current Air Quality Index (AQI) is <b style={{'backgroundColor': 'rgb(232, 158, 183)', 'font-size': '25px'}}>{currAQI}</b>  <button onClick={props.worstFinder}>Compare?</button><br></br>
          </p>
          <Comparer worstAir={props.worstAir}/>
        </div>
      )
    } else if (currAQI >= 201 && currAQI <= 300) {
      return (
        <div className="currentAQI">
          <p>Your current Air Quality Index (AQI) is <b style={{'backgroundColor': 'rgb(213, 39, 213)', 'font-size': '25px'}}>{currAQI}</b>  <button onClick={props.worstFinder}>Compare?</button><br></br>
          </p>
          <Comparer worstAir={props.worstAir}/>
        </div>
      )
    } else if (currAQI >= 301 && currAQI <= 500) {
      return (
        <div className="currentAQI">
          <p>Your current Air Quality Index (AQI) is <b style={{'color': 'rgb(107, 33, 130)', 'font-size': '25px'}}>{currAQI}</b>  <button onClick={props.worstFinder}>Compare?</button><br></br>
          </p>
          <Comparer worstAir={props.worstAir}/>
        </div>
      )
    }

  }
}


const Comparer = (props) => {
  // console.log(' props in Comparer', props) // {aqi: value}

  if (props.worstAir !== '') {

      return (
        <div>
          <p>
          Globally, the worst current AQI is reported from {props.worstAir.placeName} ({props.worstAir.state}, {props.worstAir.countryCode}) with an AQI of <b>{props.worstAir.AQI}</b>, due to high pollutant levels such as PM2.5 {props.worstAir.PM25} (ug/m3)</p>

        </div>
      )
  }

}



export default InnerAir