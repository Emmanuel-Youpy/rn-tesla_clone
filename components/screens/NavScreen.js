import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarList from '../CarList/CarList';
import Header from '../Header';
import ModelScreen from './ModelScreen';



const Stack = createNativeStackNavigator();


const NavScreen = () => {
    return (
        <View>
            <CarList />
        </View>

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="CarList" component={CarList} />
        //         <Stack.Screen name="ModelScreen" component={ModelScreen} />
        //         {/* <Header /> */}
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default NavScreen

const styles = StyleSheet.create({

})
