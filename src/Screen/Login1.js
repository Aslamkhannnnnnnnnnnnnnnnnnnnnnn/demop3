import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, Button } from 'react-native'
import { create } from "react-test-renderer";
import ImagePicker from 'react-native-image-crop-picker';
const Login2 = ({ navigation }) => {

    const [selectImagetwo, setselectImagetwo] = useState('');
    const modul = () => {
        Alert.alert(
            'camera',
            'gelleryfff',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'camera', onPress: () => { onCliKCemera() } },
                { text: 'gellery', onPress: () => { onClickopenPicker() } },
            ]
        );
    }
    const onClickopenPicker = () => {
        ImagePicker.openPicker({
            width: 200,
            height: 400,
            cropping: true
        }).then(image => {
            setselectImagetwo(image.path)
        });
    }
    const onCliKCemera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setselectImagetwo(image.path)
        });
    }
    return (
        <View style={styles.comment}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewlogo}>
                    <Text style={styles.textlogo}>LOGO</Text>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <View style={{ marginTop: 25 }}>
                        <Text style={{ fontSize: 20, color: '#3e80ad' }}>Name</Text>
                    </View>
                    <TextInput
                        style={styles.biginput}
                        placeholder="Type your name here"
                        placeholderTextColor={'#386968'}
                        fontSize={20}
                    />
                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.righteye}>Right Eye</Text>
                    </View>
                    <View style={styles.textview}>
                        <View style={{ borderWidth: 0.4, width: '25%', paddingVertical: 21 }}>
                        </View>
                        <View style={styles.View}>
                            <Text style={styles.text}>SPH.</Text>
                        </View>
                        <View style={styles.View}>
                            <Text style={styles.text}>SYL.</Text>
                        </View>
                        <View style={styles.View}>
                            <Text style={styles.text}>AXIS.</Text>
                        </View>
                    </View>
                    <View style={styles.viewtext}>
                        <View style={styles.viewdist}>
                            <Text style={styles.textdistnce}>DISTANCE{'\n'}CONSTANT</Text>
                        </View>
                        <View style={styles.placeview}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.placeview}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.placeview}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={styles.viewnear}>
                            <Text style={{ color: '#ffffff', fontSize: 15, textAlign: 'center', fontWeight: '600', padding: 10, }}>NEAR</Text>
                        </View>
                        <View style={styles.place}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.place}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.place}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Text style={{ fontSize: 20, color: '#3e80ad', fontWeight: 'normal' }}>Left Eye</Text>
                    </View>

                    <View style={styles.textview}>
                        <View style={{ borderWidth: 0.4, width: '25%', paddingVertical: 21 }}>

                        </View>
                        <View style={styles.View}>
                            <Text style={styles.text}>SPH.</Text>
                        </View>
                        <View style={styles.View}>
                            <Text style={styles.text}>SYL.</Text>
                        </View>
                        <View style={styles.View}>
                            <Text style={styles.text}>AXIS.</Text>
                        </View>
                    </View>
                    <View style={styles.viewtext}>
                        <View style={styles.viewdist}>
                            <Text style={styles.textdistnce}>DISTANCE{'\n'}CONSTANT</Text>
                        </View>
                        <View style={styles.placeview}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.placeview}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.placeview}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={styles.viewnear}>
                            <Text style={styles.textnear}>NEAR</Text>
                        </View>
                        <View style={styles.place}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.place}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                        <View style={styles.place}>
                            <TextInput
                                placeholder=''
                                keyboardType='default'
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.righteye}>Remarks</Text>
                    </View>

                    <TextInput
                        style={{ borderWidth: 0.5, height: 150, marginTop: 10 }}
                        placeholder="Type your remark here"
                        placeholderTextColor={'#386968'}
                        fontSize={20}
                    // inlineImagePadding={100}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => { modul() }}>
                            {/* <Image resizeMode={'contain'} source={selectImagetwo == '' ? require('../images/mannn.png') : { uri: selectImagetwo }} 
            style={{  height: selectImagetwo == ''? 170 : 120, width: selectImagetwo == ''? 170  : 120 ,borderRadius:70 , }} /> */}
                            {selectImagetwo == '' ?
                                //   <Image source={require('../images/mannn.png')} style={{ height: 170, width: 170 }} />
                                <Image source={require('../images/attach.png')} style={styles.imagestyle} resizeMode={'contain'} />
                                :
                                <Image source={{ uri: selectImagetwo }} style={{ height: 30, width: 30, borderRadius: 15 }} resizeMode={'contain'} />
                            }
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, color: '#3e80ad', }}>Attach your photo here</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Splash1') }} style={styles.touchbuttion}>
                        <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    comment: { flex: 1, },
    viewlogo: { backgroundColor: '#236fb2', padding: 15, alignItems: 'center' },
    textlogo: { fontSize: 20, color: '#ffffff', fontWeight: '600' },
    righteye: { fontSize: 20, color: '#3e80ad', },
    biginput: { borderColor: "gray", borderWidth: 1, padding: 10, marginTop: 6, borderColor: '#ABB2B9' },
    textview: { flexDirection: 'row', alignItems: 'center', marginTop: 7 },
    View: { borderWidth: 0.4, width: '25%', paddingVertical: 10, alignItems: 'center' },
    text: { color: '#386968', fontSize: 15, fontWeight: '600' },
    viewtext: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    viewdist: { backgroundColor: '#236fb2', width: '25%', paddingVertical: 10, borderBottomColor: 'white', },
    placeview: { borderWidth: 0.4, width: '25%', paddingVertical: 6, },
    viewnear: { backgroundColor: '#236fb2', borderTopWidth: 0.4, width: '25%', paddingVertical: 10, borderColor: 'white' },
    place: { borderWidth: 0.4, borderTopWidth: 0, width: '25%', paddingVertical: 6, },
    textdistnce: { color: '#ffffff', fontSize: 15, textAlign: 'center', fontWeight: '600', },
    textnear: { color: '#ffffff', fontSize: 15, textAlign: 'center', fontWeight: '600', padding: 10, },
    imagestyle: { height: 30, width: 30, tintColor: '#3e80ad' },
    touchbuttion: { backgroundColor: '#236fb2', paddingVertical: 20, marginHorizontal: 30, borderRadius: 10, alignItems: 'center', marginTop: 20 }
})
export default Login2;