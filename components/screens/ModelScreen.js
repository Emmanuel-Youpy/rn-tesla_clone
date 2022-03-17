import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const ModelScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Hello</Text>
                <View style={styles.text}>
                    <Text>$720 clean fuel reward is now available for california residents</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ModelScreen

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'gray'
    }
})
