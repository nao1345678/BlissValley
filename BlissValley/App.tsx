import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'
import { LogBox } from 'react-native';

import Todo from './pages/tasks/Todo'
import Timer from './pages/timer/Time'
import Journal from './pages/journal/Journal'
import Basic from './pages/tasks/Basic'
import LoadingScreen from './pages/loading/LoadingScreen'
// import BreathingExercise from './pages/breathing_exercise/BreathingExercise'
import AppLibrary from './pages/library/AppLibrary'
import SleepFollowing from './pages/sleep_following/SleepFollowing'

LogBox.ignoreLogs([
  'fontFamily "PressStart2P" is not a system font and has not been loaded through expo-font.',
  ' Warning: Each child in a list should have a unique "key" prop. Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.'
]);


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const MainStackNavigator = () => {

  const [fontsLoaded] = useFonts({
    
    'Consolas': require('./assets/fonts/Consolas.ttf'),
    'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),

  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false
        
      })}
    >
      <Stack.Screen name="List" component={Todo} />
    </Stack.Navigator>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title: '★ MH ★',
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerShadowVisible: true,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        {loading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <Stack.Screen name="Home" component={MainStackNavigator} />
        )}
        
      <Stack.Screen name="Timers" component={Timer} />
      <Stack.Screen name="Journal" component={Journal} />
      {/* <Stack.Screen name="Breathing exercise" component={BreathingExercise} /> */}
      <Stack.Screen name="Library" component={AppLibrary} />
      <Stack.Screen name="Sleep following" component={SleepFollowing} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
