import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Payments = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.textStyle}>Payments</Text> 
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

export default Payments
