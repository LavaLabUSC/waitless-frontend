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
          description: "Intimate wine bar with Italian tapas",
          latlng: {
            latitude: 34.034450,
            longitude: -118.283139
          }
        },
        {
          title: "901 Bar and Grill",
          description: "Watering hole hopping with USC students",
          latlng: {
            latitude: 34.025601,
            longitude: -118.277170
          }
        },
        {
          title: "Blaze Pizza",
          description: "Hip spot for crispy creative pies",
          latlng: {
            latitude: 34.023261,
            longitude: -118.279002
          }
        },
        {
          title: "Grinder",
          description: "Late night venue for common comfort eats",
          latlng: {
            latitude: 34.026591,
            longitude: -118.276109
          }
        },
        {
          title: "La Barca Restaurant",
          description: "Festive Mexican spot with big margharitas",
          latlng: {
            latitude: 34.033915,
            longitude: -118.290898
          }
        },
        {
          title: "The Lab Gastropub",
          description: "Science-themed spot for upscale pub grub",
          latlng: {
            latitude: 34.019903,
            longitude: -118.280058
          }
        },
        {
          title: "Pasta Roma",
          description: "Counter-serve spot for Italian standards",
          latlng: {
            latitude: 34.025569,
            longitude: -118.277418
          }
        },
        {
          title: "Lemonade",
          description: "Quick stop for seasonal comfort food",
          latlng: {
            latitude: 34.020658,
            longitude: -118.286006
          }
        },
        {
          title: "Chichen Itza Restaurant",
          description: "Foodie destination for Yucatecán fare",
          latlng: {
            latitude: 34.017355,
            longitude: -118.278383
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
