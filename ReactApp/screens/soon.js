/**
 * Coming Soon
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native'

// React Native Maps
import MapView from 'react-native-maps';

// App Globals
import AppStyles from '../styles'

// Components
import Button from '../components/button'

// Screens
import FirstLoad from './first.load'

/* Component ==================================================================== */
class ComingSoon extends Component {
  static componentName = 'ComingSoon';

  constructor(props) {
    super(props);

    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
      markers: [
        {
          title: "Bacaro L.A.",
          description: "10 mins",
          latlng: {
            latitude: 34.034450,
            longitude: -118.283139,
          }
        }
      ]
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    showSplashScreen: React.PropTypes.bool,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */
  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: ComingSoon,
      index: 2
    });
  }

  /**
    * Splash Screen - Skip
    */
  onSplashSkip = () => {
    this.setState({ splashScreenVisible: false })
  }

  /**
    * RENDER
    */
  render = () => {
    // Done
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <MapView
          style={AppStyles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              key={marker.title}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ComingSoon
