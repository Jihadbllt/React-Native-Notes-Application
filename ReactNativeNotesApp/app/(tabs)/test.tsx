import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 24,
    }
})



const test = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.title}>Test</Text>
        </View>
    )
}

export default test