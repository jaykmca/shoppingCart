/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { useSelector } from 'react-redux'; 




function Header(): JSX.Element {
  const cartData = useSelector((state:any) => state.reducer)
  const [cartDataItems, setCardDataItems] = useState(0)
  //console.warn(cartData)

  useEffect(()=>{
    setCardDataItems(cartData.length)
  },[cartData])

  return (
    <View>
      <Text 
        style={{fontSize:25,textAlign:'right',padding:10, backgroundColor:'orange'}}>
         <View>
          <Text style={{fontSize:20}}>
              {cartDataItems}
          </Text>
          </View> 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Header;
