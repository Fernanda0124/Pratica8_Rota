
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 2. Stack.Navigator: Gerencia a navegação de pilha */}
      <Stack.Navigator
        initialRouteName="Home" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#465ab4ff', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* 3. Stack.Screen para a tela Home */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: ' Início' }} 
        />

        {/* 4. Stack.Screen para a tela Details */}
        <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
          options={({ route }) => ({ 
            title: route.params.productName 
          })} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}