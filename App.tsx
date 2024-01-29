import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/HomeScreen';
import DoctorsScreen from './src/Screens/DoctorsScreen';
import MedicineScreen from './src/Screens/MedicineScreen';
import LabTestScreen from './src/Screens/LabTestScreen';
import MyHealthScreen from './src/Screens/MyHealthScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Medicines"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#144742',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{backgroundColor: '#fff'}}>
                  <Icon
                    name="house"
                    color={focused ? '#144742' : '#000'}
                    size={28}
                  />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Doctors"
          component={DoctorsScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{backgroundColor: '#fff'}}>
                  <Icon
                    name="stethoscope"
                    color={focused ? '#144742' : '#000'}
                    size={28}
                  />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Medicines"
          component={MedicineScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{backgroundColor: '#fff'}}>
                  <Icon
                    name="prescription-bottle-medical"
                    color={focused ? '#144742' : '#000'}
                    size={28}
                  />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Lab Tests"
          component={LabTestScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{backgroundColor: '#fff'}}>
                  <Icon
                    name="vial-circle-check"
                    color={focused ? '#144742' : '#000'}
                    size={28}
                  />
                </View>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="My Health"
          component={MyHealthScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{backgroundColor: '#fff'}}>
                  <Icon
                    name="file-circle-plus"
                    color={focused ? '#144742' : '#000'}
                    size={28}
                  />
                </View>
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: Platform.OS == 'ios' ? 100 : 80,
    borderTopColor: '#fff',
    paddingBottom: 5,
  },
});

export default App;
