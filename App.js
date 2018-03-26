import React, { Component } from 'react';
import {
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class AppWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: ' ',
        description: ' ',
        temp: ' '
      }
    };
  }

  getWeather= () => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=ff249c660bb50765244b2469cce5772b&units=metric';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      }
    );
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00FF00' }}>

        <View style={{ backgroundColor: 'purple', height: 24 }} />
        <View style={{ backgroundColor: '#0000FF' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            App weather
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#EDE7F6' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city) => this.setState({ city })}

            />
            <Button
              onPress={() =>
              this.getWeather()
              }
              title="Search"
              color="#0000FF"
              accessibilityLabel="Search"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#FFFF00' }}>
          <Text style={{ padding: 10, fontSize: 20 }}>
              City= {this.state.city}{'\n'}
              Main= {this.state.forecast.main}{'\n'}
              Temp= {this.state.forecast.temp}{'\n'}
              Description= {this.state.forecast.description}


          </Text>
         </View>
   </View>
    );
  }
}
