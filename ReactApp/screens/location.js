/**
 * Location Page
 *
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ListView,
  RefreshControl,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'
import AppUtil from '../util'

// Components
import ListRow from '../components/list.row'

// Screens
import Screen from './soon'

// Demo data
const defaultData = [
  {
    title: 'La Barca: 30 minutes',
  },
  {
    title: '',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/79/da/21/photo1jpg.jpg',
  },
  {
    title: 'Travel Time: 10 minutes',
    image: 'http://uberinsurancetoronto.com/wp-content/uploads/2016/01/Uber-App.png',
  },
  {
    title: 'Our Wait Estimate: 20 minutes',
    image: 'http://www.ccdg-la.com/images/pic2_bottega.jpg',
  },
    {
    title: 'Wait time too long? Find other options!',
  },
];


/* ================================ Component ================================ */
class Location extends Component {
  static componentName = 'Location';

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isRefreshing: false,
    }
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

	/**
    * Executes after all modules have been loaded
    */
	componentDidMount = () => {
	  // Fetch Data
    this._fetchData();
	}

  /**
    * Fetch Data from "API" (for Demo Purposes)
    */
  _fetchData = () => {
    this.setState({ isRefreshing: true });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(defaultData), // this is where the data is getting pulled
      isRefreshing: false,
    });
  }

  /**
    * Each Row Item
    */
  _renderRow = (data) => {
    let { title, image } = data;

    return (
      <ListRow title={title.toString()}
        image={!this.props.noImages ? image : null}
        onPress={()=>{
          this.props.navigator.push({
            title: title,
            component: Screen,
            index: 2,
            transition: 'FloatFromBottom',
          });
        }} />
    );
  }

  /**
    * RENDER
    */
  render = () => {
    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={8}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          contentContainerStyle={AppStyles.paddingBottom} 
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._fetchData}
              tintColor={AppConfig.primaryColor} />
          } />
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
});

/* Export Component ==================================================================== */
export default Location