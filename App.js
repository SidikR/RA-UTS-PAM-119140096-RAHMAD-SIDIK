// Nama : Rahmad Sidik
// NIM : 119140096

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'

import HomeScreen from './pages/home'
import Pesanan from './pages/pesanan-saya'
import Tiket from './pages/konfirmasi-tiket'
import Buat from './pages/buat-tiket'
import Stack from './pages/stack'
import Pembatalan from './pages/pembatalan'

const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    return (
      <NavigationContainer>

        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Stack} /> 
          <Tab.Screen name="Booking" component={Pesanan} />
          <Tab.Screen name="Pembatalan" component={Pembatalan} />
          <Tab.Screen name="Lainnya" component={Buat} />
        </Tab.Navigator>



      </NavigationContainer>
    )
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

export default App;