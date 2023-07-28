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
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import { addToCart, removeFromCart } from './action';
import {useDispatch, useSelector} from 'react-redux'



function Product(prop:any): JSX.Element {
  const item = prop.item
  const dispatch = useDispatch();
  const addToCartHandler = (item:any) => {
    //console.warn("Called", item)
    dispatch(addToCart(item))
   }

   const removeFromCartHandler = (item:any) =>{
      //console.warn(item)
      dispatch(removeFromCart(item.name))
   }
  const [isAdded, setIsAdded] = useState(false)
  const cartItems = useSelector((state: any) => state.reducer)

  useEffect(() =>{
    // if (cartItems && cartItems.length){
    //     cartItems.forEach((element:any) => {
    //         if (element.name === item.name){
    //             setIsAdded(true)
    //         }
    //     });
    // }
    let result = cartItems.filter((element: any) =>{
           return element.name === item.name
    })
    setIsAdded(result.length ? true : false);

  },[cartItems])
 
    return (
    <View style={{alignItems: 'center', borderBottomWidth:2, padding:10, marginBottom:50}} key={item.id} >
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.color}</Text>
        <Image style={styles.image} source={item.image} />
        <View style={{marginTop:5}}>
        {
           isAdded ? 
           <TouchableOpacity  style={[styles.button]} onPress={()=> removeFromCartHandler(item)}>
              <Text style={styles.buttonText}>Remove From  Cart</Text>
           </TouchableOpacity> 
        //    <Button 
        //        title='Remove From  Cart' 
        //        onPress={()=> removeFromCartHandler(item)} 
               
               
        //    /> 
           :
        //    <Button  
        //        title='Add To Cart' 
        //        onPress={()=> addToCartHandler(item)}
        //     />
            <TouchableOpacity  style={[styles.button]} onPress={()=> addToCartHandler(item)}>
              <Text style={styles.buttonText}>Add To  Cart</Text>
           </TouchableOpacity> 
        }
        </View>
       

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
    width: 100,
    height: 200,
  },
  button: {
    backgroundColor: '#00838F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   width :180
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Product;
