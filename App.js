import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button, TouchableOpacity, View, Text, ScrollView } from 'react-native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import PresentationScreen from './HomeScreen.js';
import { WebView } from 'react-native-webview';


function HomeScreen({navigation, route}) {
  return (
    <View style={styles.bodyTab}>
      <Text style={styles.homeContent}>Are you looking for Chemical Engineering solutions?</Text>
      <Text style={styles.homeContent}>Foam problems</Text>
      <Text style={styles.homeContent}>Ethanol problems</Text>
      <Text style={styles.homeContent}>Just click at the Button or use the bottom tab navigation</Text>
      <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('Presentation')}>
          <Ionicons name="logo-codepen" size={29} color='white' />
          <Text style={styles.stdBtnText}>Push</Text>
      </TouchableOpacity>      

    </View>
  )
}
function PresentationScreen({navigation, route}) {
  return (
    <View style={styles.bodyTab}>
      
      <ScrollView contentContainerStyle={{padding:20}}>
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('Choice')}>
            <Ionicons name="md-home" size={30} color='white' />
            <Text style={styles.stdBtnText}>Let's Formulate?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('Choice')}>
            <Ionicons name="ios-call" size={29} color='white' />
            <Text style={styles.stdBtnText}>Contact Info</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('Choice')}>
            <Ionicons name="ios-briefcase" size={29} color='white' />
            <Text style={styles.stdBtnText}>Database</Text>
          </TouchableOpacity>
          
      </ScrollView>

    </View>
  );
}

function ChoiceScreen({navigation, route}) {
  return (
    <View style={styles.bodyTab}>
      <Text style={styles.homeContent}>Choose the kind of foam you want to formulate</Text>
        <ScrollView contentContainerStyle={{padding:10}} >
          <TouchableOpacity style={styles.stdBtn}onPress={() => navigation.navigate('PPD or Mass')}>
              <Text style={styles.stdBtnText}>Conventional Foam</Text>
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('PPD or Mass')}>
              <Text style={styles.stdBtnText}>Soft Foam</Text>
          </TouchableOpacity>
     
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('PPD or Mass')}>
            <Text style={styles.stdBtnText}>High resilience Foam</Text>
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('PPD or Mass')}>
            <Text style={styles.stdBtnText}>Viscoelastic Foam</Text>  
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('PPD or Mass')}>
            <Text style={styles.stdBtnText}>Hypersoft Foam</Text>  
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.stdBtn} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="ios-home" size={29} color='white' />
            <Text style={styles.stdBtnText}>Go back Home</Text>  
          </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

function PporMassScreen({navigation, route}) {
  return (
    <View style={styles.bodyTab}>
      
        <ScrollView contentContainerStyle={{padding:10}} >
          
          <View>
            <WebView
              style={styles.container}
              source={{uri: 'https://expo.dev'}}
              />
          </View>

      </ScrollView>
    
    </View>
    
  );
}




const Tab = createBottomTabNavigator();


 function App() {
  return (
    
    <View style={styles.alignMent}>
     
      <StatusBar hidden />
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'ios-home'  : 'ios-home-outline';
                } else if (route.name === 'Details') {
                  iconName = focused ? 'ios-list' : 'ios-list';
                } else if (route.name === 'Choice'){
                  iconName = focused ? 'logo-buffer' : 'logo-buffer';
                } else if (route.name === 'Presentation'){
                  iconName = focused ? 'ios-bulb' : 'ios-bulb-outline';
                } else if (route.name ==='PPD or Mass'){
                  iconName = focused ? 'ios-build' : 'ios-build-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#781D42',
              tabBarInactiveTintColor: '#829e9e',
            })}
          >
            
            <Tab.Screen style={styles.tabAlignment} name="Home" component={HomeScreen}  
            options={{headerStyle:{backgroundColor: '#065454'}, headerTintColor:'#adc9c9'}}
            />
            <Tab.Screen style={styles.tabAlignment} name="Presentation" component={PresentationScreen}  
            screenOptions={{headerStyle:{backgroundColor: '#A3423C'}}}
            /> 
            <Tab.Screen style={styles.tabAlignment} name="Choice" component={ChoiceScreen} />
            <Tab.Screen style={styles.tabAlignment} name="PPD or Mass" component={PporMassScreen} />
          </Tab.Navigator>


        </NavigationContainer>
            
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  alignMent:{
    flex:1,
   
  },
  tabAlignment:{
    fontSize: 18,
    padding: 50,  
  },
  bodyTab:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  
  homeContent: {
    //flex: 1,
    fontSize: 20,
    paddingBottom:10,
    justifyContent: 'center',
    textAlign: 'center',
    textTransform:'capitalize',
    textShadowRadius:50,
  },
  stdBtn:{
    backgroundColor: '#02002e',
    padding: 30,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 30,
    
  },
  stdBtnText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 50,
    
  }
})

