/*
 * @Author: shenyanghong
 * @Date: 2021-08-01 15:41:40
 * @LastEditTime: 2021-08-01 16:25:39
 * @LastEditors: shenyanghong
 * @Description: 
 * @FilePath: /RN4Android/index.js
 * 
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
        <Text style={styles.hello}>Hello, World</Text>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor:'#00ff00'
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50
  }
});

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld
);