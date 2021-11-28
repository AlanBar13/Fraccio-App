import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStringtoLSS = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.log('[AsyncStorage] ', error.message)
    }
}

export const getStringValueLSS = async (key) => {
    try {
        const result = await AsyncStorage.getItem(key)
        if (result !== null){
            return result
        }else{
            return null
        }
    } catch (error) {
        console.log('[AsyncStorage] ', error.message)
    }
}

export const savetoLSS = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
        console.log('[AsyncStorage] ', error.message)
    }
}

export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
        console.log('[AsyncStorage] ', error.message)
    }
}

export const deleteKey = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log('[AsyncStorage] ', error.message)
    }
}
  