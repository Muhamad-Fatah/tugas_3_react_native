/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import Barang from "./Component/Barang"
import Header from './Component/Header';

const App = () => {
  return (
    <View>
      <Header data="SELAMAT DATANG" />
      <Barang />
    </View>
  )
}

export default App;
