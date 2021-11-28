import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {useDispatch} from 'react-redux'

import { signOut } from '../actions/authActions'

const Dashboard = () => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
           <Text style={styles.textStyle}>Dashboard</Text>
           <Button title="Log Out" onPress={() => dispatch(signOut())} /> 
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

export default Dashboard
