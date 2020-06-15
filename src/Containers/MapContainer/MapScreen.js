import React, {Component} from 'react';
import {View, Text, Modal} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Style';
import {data} from './../../dataSets';
import NewsList from './../../Components/news';

class MapScreen extends Component {
  state = {
    region: {
      latitude: 26.3463,
      longitude: 88.906998,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

    currentCords: {
      latitude: 26.3463,
      longitude: 88.906998,
    },
    isModal: false,
    countryCode: 'In',
  };

  markerPressed = code => {
    this.setState({
      isModal: true,
      countryCode: code,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.state.region}
          loadingEnabled={true}
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
          showsUserLocation={true}
          showsCompass={true}>
          {/* current marker */}
          <Marker
            coordinate={this.state.currentCords}
            pinColor="#0A79DF"
            title={'India'}
          />

          {/* country markers */}

          {data.map((item, i) => (
            <Marker
              coordinate={item.cords}
              title={item.name}
              onPress={() => this.markerPressed(item.country_code)}
            />
          ))}
        </MapView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModal}
          onRequestClose={() => this.setState({isModal: false})}>
          <View style={styles.modalView}>
            <Text
              style={styles.modalCloseBtn}
              onPress={() => this.setState({isModal: false})}>
              close
            </Text>
            <NewsList country={this.state.countryCode} />
          </View>
        </Modal>
      </View>
    );
  }
}

export default MapScreen;
