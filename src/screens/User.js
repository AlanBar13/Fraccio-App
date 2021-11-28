import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const User = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.textStyle}>User</Text> 
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

export default User
