// import GeneralInfo from '..jsx'
// import InnerAir from './aqi.jsx'
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import moment from "moment";

import ReactTable from "react-table";

const OutterAir = (props) => {
  // const [data, setData] = useState(tableData);
  // console.log("OutterAir props", props);

  const tableData = {
    // tableHead: ["Pollutant", "Concentration"],

    // have a color tag for each pollu based on how it differes from EPA standards
    tableData: [
      [
        "PM2.5",
        `${props.airData.PM25.toFixed(1)} ug/m3   ${
          35 - props.airData.PM25.toFixed(1)
        }`,
      ],
      ["O3", props.airData.OZONE.toFixed(1)],
      ["CO", props.airData.CO.toFixed(1)],
      ["NO2", props.airData.NO2.toFixed(1)],
      ["SO2", props.airData.SO2.toFixed(1)],
    ],
  };

  const dataCaptureDateTime = props.airData.updatedAt;
  const dataDateTime = new Date(dataCaptureDateTime);
  const localTime = moment().format("h:mm:ss A");

  const dataDateTimeSTR = dataDateTime.toLocaleString();
  const timeDiff = moment(dataDateTimeSTR, "MM/DD/YYYY HH:mm:ss a").fromNow();

  return (
    <View style={styles.container}>
      <Table>
        <Rows data={tableData.tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    // alignItems: "stretch",
    // backgroundColor: "#fff",
    marginBottom: "20%",
  },

  text: {
    margin: 9,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OutterAir;

{
  /* <View>
        <Text>
          {" THIS SHOULD BE A POP up modal"}
          Latest available data was collected on {dataDateTime.toLocaleString()}
          , about {timeDiff} from your local time {localTime}.{" "}
        </Text>
        <Text> Your AQI is: {props.airData.AQI}</Text>
      </View> */
}
