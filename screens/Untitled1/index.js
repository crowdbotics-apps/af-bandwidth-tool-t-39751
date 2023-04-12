import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.bNaiDPpM}>USAF Bandwidth Tester</Text></View>
          <View style={styles.column2}><View style={styles.VjGMmhow}><TextInput style={styles.arCnJSze} numberOfLines={1} editable={true} placeholder="Email Address" placeholderTextColor="#fffdfd"></TextInput></View></View>
          <View style={styles.column3}></View>
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#212121"
  },
  column1: {
    flex: 1,
    width: 338,
    height: 185
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  bNaiDPpM: {
    width: 337,
    height: 39,
    lineHeight: 50,
    fontSize: 30,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "300",
    fontFamily: "Roboto",
    position: "absolute",
    left: 0.5,
    top: -1,
    color: "#8593A6"
  },
  VjGMmhow: {
    height: 300,
    width: 300,
    backgroundColor: "#121212",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 19,
    opacity: 0.55,
    top: 0
  },
  arCnJSze: {
    backgroundColor: "#8593A6",
    borderColor: "#cccccc",
    width: 252,
    height: 30,
    position: "absolute",
    left: 23,
    top: 16
  }
});
export default Untitled1;