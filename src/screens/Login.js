import React, {useState} from 'react'
import {Box, FormControl, Input, Stack, WarningOutlineIcon, Button, Center, Heading} from 'native-base'
import {useDispatch, useSelector} from 'react-redux'

import { signIn } from '../actions/authActions'

const Login = () => {
    const dispatch = useDispatch()
    const {isLoading, error} = useSelector((state) => state.auth)

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const login = async () => {
        await dispatch(signIn(user, pass))
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
                        <Input keyboardType="email-address" autoCapitalize="none" value={user} onChangeText={setUser} />
                    </Stack>
                </FormControl>
                <FormControl isInvalid={error}>
                    <Stack mx="4" paddingTop="2">
                        <FormControl.Label>Contraseña:</FormControl.Label>
                        <Input type="password" value={pass} onChangeText={setPass} />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Usuario o contraseña invalidos
                        </FormControl.ErrorMessage>
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
