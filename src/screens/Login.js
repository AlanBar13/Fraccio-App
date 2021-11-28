import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TextInput, ActivityIndicator } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import { signIn } from '../actions/authActions'

const Login = () => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector((state) => state.auth)

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const login = () => {
        dispatch(signIn(user, pass))
    }
    return (
        <View style={styles.container}>
           <Text style={styles.textStyle}>Login</Text>
           <TextInput 
                placeholder="Usuario"
                value={user}
                onChangeText={setUser}
            />
           <TextInput 
                placeholder="Contraseña"
                value={pass}
                onChangeText={setPass}
                secureTextEntry 
            />
           <Button title="login" onPress={() => login()}></Button>
           {isLoading === false ? <></> : <ActivityIndicator />} 
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

export default Login
