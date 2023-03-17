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

import * as Location from "expo-location";

import OutterAir from "./components/airdata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      zip: "",
      worst: "",
      badZip: false,
      data: {
        placeName: "Durham",
        state: "",
        postalCode: "",
        PM25: 0,
        OZONE: 0,
        CO: 0,
        NO2: 0,
        SO2: 0,
        updatedAt: "2000-01-01 00:00:00",
        AQI: 0,
      },
    };
  }
  componentDidMount() {
    // this.GetCurrentLocation();
  }

  GetCurrentLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      this.search(response[0].postalCode);
    }
  };

  zipInput(zip) {
    console.log("zip typing", zip);
    this.setState({
      zip,
    });
  }

  search(zip) {
    const options = {
      method: "GET",
      url: `https://api.ambeedata.com/latest/by-postal-code?postalCode=${zip}&countryCode=US`,
      headers: {
        "x-api-key":
          "d5c13c8dcc35d7431096f129ef638117742edb05adc77dad34b5a43ab1006d7d",
        "Content-type": "application/json",
      },
    };

    axios
      .request(options)
      .then((incomingData) => {
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
      // <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={{ uri: "https://i.gifer.com/2D2M.gif" }}
          resizeMode="cover"
          style={styles.image}
        >
          <View tyle={styles.container}>
            <Text style={styles.title}>
              {this.state.data.placeName}
              {/* , {this.state.data.state} */}
            </Text>
            <Text style={styles.aqiInfo}>AQI: {this.state.data.AQI}</Text>

            <OutterAir airData={this.state.data} />

            <View style={styles.searchPlace}>
              <TextInput
                style={styles.zipInput}
                onChangeText={(e) => {
                  this.zipInput(e);
                }}
                // inputStyle={{ color: "red" }}
                placeholder="Search by Zipcode"
                placeholderTextColor="#000"
                keyboardType="numeric"
                // color="black"
              />
              <Button
                style={styles.searchBTN}
                title="Search"
                onPress={() => {
                  this.search(this.state.zip);
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: "50%",
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "30%",
    marginTop: "30%",
    marginLeft: "35%",
  },
  aqiInfo: {
    fontSize: "20%",
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "40%",
  },
  image: {
    // flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  zipInput: {
    flex: 1,
    height: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  },
  searchPlace: {
    flex: 1,
    flexDirection: "row",
  },
  searchBTN: {
    flex: 1,
  },
});

export default App;
