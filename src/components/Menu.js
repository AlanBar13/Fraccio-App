import React, {useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux'

import { bootstrapAsync } from '../actions/authActions'

import Dashboard from '../screens/Dashboard';
import Announcements from '../screens/Announcements';
import Visits from '../screens/Visits';
import Payments from '../screens/Payments';
import User from '../screens/User';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator()

const Menu = () => {
  const dispatch = useDispatch()
  const authinfo = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(bootstrapAsync())
  }, [])

  const isSigned = authinfo.isSigned
  return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerType="back"
          initialRoute="Home"
          screenOptions={{
            activeTintColor: '#4b0000',
            itemStyle: { marginVertical: 10 }
          }}>
            {isSigned ? (
              <>
                <Drawer.Screen 
                name="Home" 
                options={{
                  title:'Dashboard',
                  headerShown: false
                }} 
                component={Dashboard} />
                <Drawer.Screen name="Announcements" component={Announcements} />
                <Drawer.Screen name="Visits" component={Visits} />
                <Drawer.Screen name="Payments" component={Payments} />
                <Drawer.Screen name="User" component={User} />
              </>
            ): (
              <Drawer.Screen 
                name="Login"
                options={{
                  headerShown: false,
                  swipeEnabled: false
                }}
                component={Login} />
            )}
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

export default Menu;
