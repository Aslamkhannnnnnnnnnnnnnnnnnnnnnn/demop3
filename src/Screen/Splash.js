import React,{useEffect} from 'react';
import { ImageBackground, Text, View } from 'react-native';


const Splace = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('MyDrawer')
      }, 2000);
    }, [navigation]);
  
    return (
      <ImageBackground 
       source={ImagePath.logo }
      style={{ flex: 1,}}>
        {/* <Text style={{fontSize:20,fontWeight:'bold',backgroundColor:'red',borderRadius:10,padding:10,}}>
          Biling 
        </Text> */}
      </ImageBackground>
    );
  }
  
  export default Splace;