/*
 * @Author: shenyanghong
 * @Date: 2021-08-01 15:41:40
 * @LastEditTime: 2021-08-04 09:49:02
 * @LastEditors: shenyanghong
 * @Description:
 * @FilePath: /RN4Android/index.tsx
 *
 */
import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>你好, 世界 </Text>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#00ff00",
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 50,
  },
});

AppRegistry.registerComponent("RN4Android", () => HelloWorld);
