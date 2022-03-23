import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer';



const Header = () => {
    // const Drawer = createDrawerNavigator();

    // function MyDrawer() {
    //   return (
    //     <Drawer.Navigator>
    //       <Drawer.Screen name="Feed" component={Feed} />
    //       <Drawer.Screen name="Article" component={Article} />
    //     </Drawer.Navigator>
    //   );
    // }
    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            {/* <Image style={styles.menu} source={require('../assets/images/menu.png')} /> */}
            <View style={{ backgroundColor: 'lightgray', padding: 8, borderRadius: 10 }}>
                <Text > Menu</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'

    }
})
