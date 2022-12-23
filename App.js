import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Linking,
  ImageBackground,
  Alert,
} from "react-native";

import axios from "axios";
import moment from "moment";

// require("dotenv").config();
import OutterAir from "./components/airdata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      zip: "",
      worst: "",
      badZip: false,
      data: {
        placeName: "",
        state: "",
        postalCode: "",
        PM25: "",
        OZONE: "",
        CO: "",
        NO2: "",
        SO2: "",
        updatedAt: "2000-01-01 00:00:00",
        AQI: "",
      },
    };
    // this.search = this.search.bind(this);
    // this.findWorst = this.findWorst.bind(this);
  }

  findWorst() {
    axios
      .get("/worst&best")
      .then((incomingData) => {
        console.log("axios get findWorst incoming Data", incomingData.data); // [{worst}, {best}]
        this.setState({
          worst: incomingData.data[0],
        });
      })
      .catch((err) => {
        console.log("axios client err", err);
      });
  }

  zipInput(zipcode) {
    console.log("typing...", zipcode, "zip", this.state.zip);
    this.setState({
      zip: zipcode,
    });
  }

  search() {
    console.log("INisde");

    const options = {
      method: "GET",
      url: `https://api.ambeedata.com/latest/by-postal-code?postalCode=${this.state.zip}&countryCode=US`,
      headers: {
        "x-api-key":
          "d5c13c8dcc35d7431096f129ef638117742edb05adc77dad34b5a43ab1006d7d",
        "Content-type": "application/json",
      },
    };

    axios
      .request(options)
      .then((incomingData) => {
        // var dataDate = moment
        //   .utc(incomingData.data.stations[0].updatedAt)
        //   .toDate();
        // var local = moment(dataDate).local().format("YYYY-MM-DD HH:mm:ss");
        // console.log("DATE", local);
        this.setState({
          data: incomingData.data.stations[0],
        });
        // console.log("DATAA", this.state.data);
      })
      .catch((err) => {
        console.log("axios client err", err);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground
            source={{ uri: "https://i.gifer.com/2D2M.gif" }}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.title}>Air Pollution Near me</Text>

            <TextInput
              style={styles.input}
              onChangeText={(e) => {
                this.zipInput(e);
              }}
              // value={"Zip"}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <Button
              title="Search"
              onPress={() => {
                this.search();
              }}
            />

            <OutterAir airData={this.state.data} />
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: "-10%",
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "left",
    // justifyContent: "center",
  },
  title: {
    fontSize: "30%",
    marginLeft: "15%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
