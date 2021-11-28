import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Visits = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.textStyle}>Visits</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '700'
    }
})

export default Visits
