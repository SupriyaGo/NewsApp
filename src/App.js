import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import NewsScreen from './Containers/NewsContainer';
import MapScreen from './Containers/MapContainer';

const App = () => {
  const [switchComponent, setSwitchComponent] = useState(true);

  const onPresSwitch = () => {
    setSwitchComponent(!switchComponent);
  };
  return (
    <>
      {switchComponent ? <NewsScreen /> : <MapScreen />}
      <TouchableOpacity onPress={onPresSwitch} style={styles.switchBtn}>
        <Text style={styles.switchBtnText}>
          {switchComponent ? 'Swich to mapscreen' : ' Switch to news screen'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  switchBtn: {
    backgroundColor: 'green',
    position: 'absolute',
    right: 10,
    bottom: 10,
    padding: 15,
    borderRadius: 28,
    elevation: 5,
  },
  switchBtnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
