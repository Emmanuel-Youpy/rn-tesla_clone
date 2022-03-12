import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import cars from './cars'
import CarItem from '../CarItem'

const CarList = (props) => {
    return (

        <View style={styles.container}>
            <FlatList data={cars} renderItem={({ item }) => <CarItem car={item} keyExtractor={item => item.id} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}

            />
        </View>
    )
}

export default CarList

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
        // height: Dimensions.get('window').height
    }
})
