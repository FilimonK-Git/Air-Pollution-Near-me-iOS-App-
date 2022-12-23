// import GeneralInfo from './genInfo.jsx'
// import InnerAir from './aqi.jsx'
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const OutterAir = (props) => {
  // const [data, setData] = useState(tableData);
  console.log("OutterAir props", props);

  const tableData = {
    tableHead: ["Pollutant", "Concentration"],
    tableData: [
      ["PM2.5", props.airData.PM25.toFixed(1)],
      ["O3", props.airData.OZONE.toFixed(1)],
      ["CO", props.airData.CO.toFixed(1)],
      ["NO2", props.airData.NO2.toFixed(1)],
      ["SO2", props.airData.SO2.toFixed(1)],
    ],
  };

  return (
    <View style={styles.container}>
      <Table>
        <Row
          data={tableData.tableHead}
          style={styles.head}
          textStyle={styles.headText}
        />
        <Rows data={tableData.tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  head: { height: 44, backgroundColor: "darkblue" },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  text: { margin: 6, fontSize: 16, fontWeight: "bold", textAlign: "center" },
});

export default OutterAir;
