import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';


const Order = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);
  const DATA = [
    {
      NameText: 'price '
    },
    {
      NameText: 'total amount'
    },
    {
      NameText: 'total amount '
    },
    {
      NameText: 'total amount '
    },
    {
      NameText: 'total amount '
    },
    {
      NameText: 'total amount '
    },
  ];
  // const selectedItem = {
  //   title: 'Selected item title',
  //   description: 'Secondary long descriptive text ...',
  // };
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: 'Apple', value: 'apple' },
  //   { label: 'Banana', value: 'banana' }
  // ]);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ borderRadius: 10, marginBottom: 10, padding: 5 }}>
      <Text style={{ fontSize: 16, color: 'white', fontWeight: '400', }}>{item.NameText}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1, padding: 15, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
        <TouchableOpacity

        >
          <Image
            style={{ width: 25, height: 25, }}
            source={ImagePath.menu}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => { navigation.navigate("Order") }}

          style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: '800', color: 'black' }}>Order</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15, backgroundColor: '#c7c4bb', flex: 0.5, borderRadius: 10, }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        //  onPress={()=>{navigation.navigate("Order")}}
        style={{ backgroundColor: 'blue', alignSelf: 'center', marginVertical: 20, borderRadius: 10, paddingHorizontal: 35, paddingVertical: 8 }}>
        <Text style={{ color: 'white',fontSize: 15, fontWeight: '600', }}>Button</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Order;