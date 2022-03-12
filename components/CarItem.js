import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, } from 'react-native'
import StyledButton from './StyledButton'

const CarItem = (props) => {
    const { name, tagline, image, taglineCTA } = props.car
    return (
        <View style={styles.Container}>
            <ImageBackground source={image} style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}<Text style={styles.taglineCTA}> {taglineCTA}</Text></Text>
            </View>


            <View style={styles.btn}>
                <StyledButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was pressed");
                    }}
                />

                <StyledButton type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Existing Inventory was pressed");
                    }} />
            </View>
        </View>
    )
}

export default CarItem

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        // height: '100%'
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    }, btn: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
    taglineCTA: {
        textDecorationLine: 'underline'
    }
})
