import React, { useEffect, useState } from 'react';
import { Text, View, Image, Modal, StyleSheet, TouchableOpacity, FlatList, Pressable } from 'react-native';
import ImagePath from '../navigation/ImagePath';


const Homesecond = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const DATA = [
        {
            NameText: 'Name '
        },
        {
            NameText: 'Phone Number'
        },
        {
            NameText: 'Date of Birth '
        },
        {
            NameText: 'Address'
        },
        {
            NameText: 'prize '
        },
        {
            NameText: 'total amount'
        },
        {
            NameText: 'debit and credit'
        },
        {
            NameText: 'date '
        },


    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity

            style={{ borderRadius: 10, marginBottom: 10, padding: 5 }}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '400', }}>{item.NameText}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: 'white', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
                <TouchableOpacity
                >
                    <Image
                        style={{ width: 25, height: 25, }}
                        source={ImagePath.menu}
                    />
                </TouchableOpacity>
                <TouchableOpacity
            onPress={() => { navigation.navigate("Order") }}

                    style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '800', color: 'black' }}>Name</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, backgroundColor: '#c7c4bb', flex: 0.6, borderRadius: 10, }}>
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>

                    <View style={{ backgroundColor: 'white', borderRadius: 10, elevation: 2, width: '93%', padding: 10 }}>
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}
                        <Pressable
                            // style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <View
                                style={{ borderRadius: 10, marginVertical: 5, padding: 5, }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400', marginVertical: 6 }}>Name</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400', }}>Phone Number</Text>

                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400', marginVertical: 6 }}>amount</Text>

                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400', marginVertical: 6 }}>amount</Text>

                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '400', marginVertical: 6 }}>amount</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                //  onPress={()=>{navigation.navigate("Order")}}
                                style={{ backgroundColor: 'blue', alignSelf: 'center', marginVertical: 20, borderRadius: 10, paddingHorizontal: 35, paddingVertical: 8 }}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '600', }}>Button</Text>
                            </TouchableOpacity>
                        </Pressable>
                    </View>

                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },




});
export default Homesecond