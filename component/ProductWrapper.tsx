/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';
import  Header  from './Header';
import Product from './Product';
import mobileImage  from '../assets/samsung.jpg'
import { useNavigation } from '@react-navigation/native';
//import nokiaImage from './assets/Nokia.JPG'

const products  =
[
      {
        id:1,
        name :'Samsung Mobile',
        color : 'White',
        price : '$1000',
        image : mobileImage
      },
      {
        id:2,
        name :'Nokia Mobile',
        color : 'Blue',
        price : '$1500',
        image : mobileImage
      },
      {
        id:3,
        name :'i Phone Mobile',
        color : 'Black',
        price : '$2000',
        image : mobileImage
      },
      {
        id:4,
        name :'i Phone Mobile PRO',
        color : 'Black',
        price : '$5000',
        image : mobileImage
      }

]


function ProductWrapper(): JSX.Element {
    const navigation = useNavigation();

  return (
    <View >
       <Button title="Go to user list" onPress={()=>navigation.navigate('User')}></Button> 
      <Header/>
      <ScrollView>
      {
        products.map((item) =>
          <Product  item ={item} key={item.id}/>
          )
        }
      </ScrollView>
     
      <Text style={{fontSize:30}}>Shopping Cart</Text>
      
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
  },
});

export default ProductWrapper;
