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

//import nokiaImage from './assets/Nokia.JPG'

import {NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductWrapper from './component/ProductWrapper';
import UserList from './component/UserList';

const stack = createNativeStackNavigator()



function App(): JSX.Element {
  

  return (
    // <View >
    //   <Header/>
    //   <ScrollView>
    //   {
    //     products.map((item) =>
    //       <Product  item ={item} />
    //       )
    //     }
    //   </ScrollView>
     
    //   <Text style={{fontSize:30}}>Shopping Cart</Text>
      
    // </View>

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={ProductWrapper}/>
        <stack.Screen name='User' component={UserList}/>
      </stack.Navigator>
    </NavigationContainer>
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

export default App;
