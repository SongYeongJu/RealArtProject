import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/loginStyle";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class Splash extends React.Component {
    setTimeout= (() => {
        alert('Hi');
      }, 2000);
    
    constructor(props) {
        super(props);
//        this.setTimeout();
    }
  
    render() {
      return (
        <View style={styles.container}> 
          <Text>Splash!</Text>
        </View>
      );
    }
  }
  

export default Splash;
