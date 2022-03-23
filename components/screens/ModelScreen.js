import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Header';
// import Header from './components/Header';

const ModelScreen = () => {
    const [activeTab, setActiveTab] = useState('Purchase Price');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Header /> */}

            <ScrollView >
                <View style={styles.container}>

                    {/* <Header /> */}
                    <View style={styles.subcontainer}>

                        <Text>Icon</Text>
                        <Text>$720 clean fuel reward is now available for california residents</Text>
                    </View>
                    {/* <Image style={styles.img} source={require('../../assets/images/Model3.jpeg')} /> */}
                    <View style={styles.img}>
                        <Image source={require('../../assets/images/car.jpg')} />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.txt}>Model 3</Text>
                        <Text style={styles.txt1}>Est. Delivery: 1 month</Text>
                    </View>

                    <View style={styles.btn}>
                        <View style={styles.btn1}>
                            <PriceButton text='Purchase Price' btnColor='lightgray' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} />
                            <PriceButton text='Potential Savings' btnColor='white' textColor='lightgray' activeTab={activeTab} setActiveTab={setActiveTab} />
                        </View>
                    </View>
                    <SpeedReach />
                    <View>
                        <Text>Rear-Wheel Drive</Text>
                    </View>
                    <ModelTypes />
                    <View>
                        <Text>Dual Motor All-Wheel Drive</Text>
                    </View>
                    <ModelTypes />

                </View>

            </ScrollView>


        </SafeAreaView>

    )
}

const PriceButton = (props) => {
    return (
        <TouchableOpacity style={{ backgroundColor: props.activeTab === props.text ? 'white' : 'lightgray', padding: 15, borderRadius: 30, paddingRight: 30, paddingLeft: 30, }} onPress={() => props.setActiveTab(props.text)}>
            <View >
                <Text style={{ color: props.activeTab === props.text ? 'black' : 'black' }}>{props.text}</Text>
            </View>
        </TouchableOpacity >
    )
}

const SpeedReach = () => {
    return (
        <View style={styles.speed}>
            <View style={styles.spd1}>
                <Text style={styles.spdtxt}>334mi</Text>
                <Text style={styles.spdtxt1}>Range(est)</Text>
            </View>
            <View style={styles.spd}>
                <Text style={styles.spdtxt}>145mph</Text>
                <Text style={styles.spdtxt1}>Top Speed</Text>
            </View>
            <View style={styles.spd1}>
                <Text style={styles.spdtxt}>4.2sec</Text>
                <Text style={styles.spdtxt1}>0-60mph</Text>
            </View>
        </View>
    )
}


const ModelTypes = () => {
    return (
        <View style={styles.Modelbox}>
            <Text style={styles.modaltxt}>Model 3</Text>
            <Text style={styles.modaltxt}>>$41,940</Text>
        </View>

    )
}




export default ModelScreen

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white'
    },
    subcontainer: {
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 30,
        backgroundColor: 'lightgray',
    },
    img: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },


    text: {
        alignItems: 'center',
        paddingVertical: 10
    },
    txt: {
        fontSize: 30,
        fontWeight: '500'
    },
    txt1: {
        color: 'gray',
        paddingVertical: 10,


    },


    btn: {
        backgroundColor: 'lightgray',
        borderRadius: 30,
        padding: 5

    },



    btn1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    speed: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30

    },
    spd: {
        paddingLeft: 70,
        paddingRight: 70,
        alignItems: 'center',
    },
    spd1: {
        alignItems: 'center',


    },
    spdtxt: {
        fontSize: 20,


    },
    spdtxt1: {
        color: 'gray'

    },

    Modelbox: {
        backgroundColor: 'lightgray',
        borderRadius: 30,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'


    },
    modaltxt: {
        padding: 10,
        fontSize: 20
    }


})
