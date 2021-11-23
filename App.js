import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './Screens/All';
import Business from './Screens/Business';
import HealthScreen from './Screens/HealthScreen';
import SportsScreen from './Screens/SportsScreen';
import TechScreen from './Screens/TechScreen';
import Science from './Screens/Science';
import Politics from './Screens/Politics';

import { Icon } from 'react-native-elements';
import EntertainmentScreen from './Screens/Entertainment';


 

const Tab = createBottomTabNavigator();


 export default function App() {

  return (
   <>
   
  
   <NavigationContainer >


      <Tab.Navigator 
        
      >
      
         
        <Tab.Screen name="All News" component={All}
          options={{
            
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color} />
            ),

          }} />

        <Tab.Screen name="Business News" component={Business}
          options={{
             
            tabBarIcon: (props) => (
              <Icon type='feather' name='dollar-sign' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Health News" component={HealthScreen}
          options={{
             
            tabBarIcon: (props) => (
              <Icon type='feather' name='heart' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Sports News" component={SportsScreen}
          options={{
            
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="tennisball-outline" color={props.color} />
            ),
          }} />

        <Tab.Screen name="Tech News" component={TechScreen}
          options={{
             
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="hardware-chip-outline" color={props.color} />
            ),
          }} />
        <Tab.Screen name="Science News" component={Science}
          options={{
            
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="analytics-outline" color={props.color} />
            ),
          }} />
        <Tab.Screen name="Entertainment News" component={EntertainmentScreen}
          options={{
             
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="happy-outline" color={props.color} />
            ),
          }} />
        <Tab.Screen name="Political News" component={Politics}
          options={{
             
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="ribbon-outline" color={props.color} />
            ),
          }} />
       
     

      </Tab.Navigator>

      <StatusBar style="auto" />

    </NavigationContainer></>
  );
}


