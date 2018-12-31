import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

export default class App extends React.Component {
  render() {
	  let pic = {
      uri: 'https://s3.amazonaws.com/yiva/src/images/white.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 149}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
