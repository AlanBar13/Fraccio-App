import React, {useState} from 'react'
import {Box, FormControl, Input, Stack, WarningOutlineIcon, Button, Center, Heading, useToast} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'

import { signIn } from '../actions/authActions'

const Login = () => {
    const dispatch = useDispatch()
    const {isLoading, error} = useSelector((state) => state.auth)

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const toast = useToast()

    const login = () => {
        dispatch(signIn(user, pass))
        if(error){
            toast.show({
                title: "Usuario invalido o contraseña incorrecta",
                status: "warning"
            })
        }
    }

    return (
        <Center flex={1} px={3}>
            <Heading textAlign="center" mb="10">Fraccio</Heading>
            <Box w={{
                base:"90%",
                md: "25%"
            }}
            space={2}>
                <FormControl>
                    <Stack mx="4" paddingTop="2">
                        <FormControl.Label>Usuario:</FormControl.Label>
                        <Input value={user} onChangeText={setUser} />
                    </Stack>
                </FormControl>
                <FormControl>
                    <Stack mx="4" paddingTop="2">
                        <FormControl.Label>Contraseña:</FormControl.Label>
                        <Input type="password" value={pass} onChangeText={setPass} />
                    </Stack>
                </FormControl>
                <Stack mx="4" paddingTop="2">
                    <Button isLoading={isLoading} spinnerPlacement="end" onPress={() => login()}>Log In</Button>
                </Stack>
            </Box>
        </Center>
    )
}

export default Login
