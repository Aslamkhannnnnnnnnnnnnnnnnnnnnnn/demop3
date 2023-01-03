import React, { useState, useEffect } from 'react';
import { Text, View, Image,StyleSheet, TouchableOpacity, FlatList ,} from 'react-native';
import ImagePath from '../navigation/ImagePath';


const HomeScreen = ({ navigation }) => {


  const DATA = [
    {
      NameText: 'Name :'
    },
    {
      NameText: 'Phone Number :'
    },
    {
      NameText: 'amount :'
    },
  ];
 
  const renderItem = ({ item }) => (

    <TouchableOpacity
      onPress={() => { navigation.navigate('Homesecond') }}
      style={{ borderRadius: 10, marginVertical: 5, padding: 5 }}>
      <Text style={{ fontSize: 16, color: 'white', fontWeight: '400', }}>{item.NameText}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: 'white', }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('MyDrawer')}}
        >
          <Image
            style={{ width: 25, height: 25, }}
            source={ImagePath.menu}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: '800', color: 'black' }}>Name</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 10, paddingHorizontal: 35, paddingVertical: 8 }}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', }}>Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 10, paddingHorizontal: 35, paddingVertical: 8 }}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', }}>Seller</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 40, backgroundColor: '#c7c4bb', flex: 0.3, borderRadius: 10, }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ backgroundColor: 'red', alignSelf: 'center', marginVertical: 20, borderRadius: 10, paddingHorizontal: 35, paddingVertical: 8 }}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', }}>Button</Text>
      </TouchableOpacity>
    </View>

  );
}



export default HomeScreen