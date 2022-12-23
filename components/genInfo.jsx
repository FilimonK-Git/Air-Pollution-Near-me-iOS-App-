import moment from 'moment'
moment().format()

const GeneralInfo = (props) => {

  const dataCaptureDateTime = props.genInfo.airData.updatedAt
  const dataDateTime = new Date (dataCaptureDateTime)
  const localTime = moment().format('h:mm:ss A');

  const dataDateTimeSTR = dataDateTime.toLocaleString()
  const timeDiff = moment(dataDateTimeSTR, "MM/DD/YYYY HH:mm:ss a").fromNow();

  if (props.genInfo.airData.placeName !== '') {
    return (
      <div className="locDataTime">
        <p> Here's your latest air pollution data for <b>{props.genInfo.airData.placeName}, {props.genInfo.airData.state}</b>.</p>

        <p> Latest available data was collected on <em>{dataDateTime.toLocaleString()}</em>, about {timeDiff} from your local time <em>{localTime}. </em></p>

        <p>  Data powered by: <a href="https://www.getambee.com/" target="_blank">Ambee DataAir</a></p>
        <br></br>

     </div>

    )
  }

}

export default GeneralInfo