import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button, TouchableOpacity, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';


function PresentationScreen({navigation, props}) {
    return (
      <View style={styles.bodyTab}>
        <Text style={styles.homeContent}>This App is designed to help you formulate foams</Text>
        
        <View>
            <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('Details')}>
              <Text style={styles.stdBtnText}>Let's Formulate?</Text>
            </TouchableOpacity>
        </View>
  
      </View>
    );
  }

  export default PresentationScreen;


const styles = StyleSheet.create({
bodyTab:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    
  },
  homeContent: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
  },
  stdBtn:{
    backgroundColor: '#402626',
    padding: 30,
    marginTop: 50,
    flexDirection: 'column',
  },
  stdBtnText: {
    color: 'white',
    fontSize: 20,
  }
})