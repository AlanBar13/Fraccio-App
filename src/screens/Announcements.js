import React, {useEffect} from 'react'
import { Box, FlatList, Spinner } from 'native-base'
import ListItem from '../components/AnnouncesListItem'
import socketIOClient from "socket.io-client";

import {useDispatch, useSelector} from 'react-redux'
import { getNoticesList, addNotice } from '../actions/NoticesActions'

const Announcements = () => {
    const dispatch = useDispatch()
    const {noticeList, isLoading} = useSelector((state) => state.notices)

    useEffect(() => {
      dispatch(getNoticesList())
      const socket = socketIOClient("http://localhost:5000/");
      socket.on("newNotice", data => {
        console.log('socket')
        dispatch(addNotice(data.title, data.description, data.type, data.postedAt, data._id, true))
      });
    },[])

      return (
        <Box
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Box h="2" />
          {
            isLoading ?
            <Spinner accessibilityLabel="Cargando Anuncios" /> 
            :
            <FlatList
              data={noticeList}
              renderItem={({ item }) => (
                <ListItem item={item} />
              )}
              keyExtractor={(item) => item._id}
            />
          }
        </Box>
      )
}


export default Announcements
