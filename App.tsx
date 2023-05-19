import { Home } from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='transparent'
        translucent
      />
      <Home/>
    </>
  );
}
