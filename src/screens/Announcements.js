import React, {useEffect} from 'react'
import { Box, FlatList } from 'native-base'
import ListItem from '../components/AnnouncesListItem'
import socketIOClient from "socket.io-client";

import {useDispatch, useSelector} from 'react-redux'
import { getNoticesList } from '../actions/NoticesActions'

const Announcements = () => {
    const dispatch = useDispatch()
    const {noticeList} = useSelector((state) => state.notices)

    useEffect(() => {
      dispatch(getNoticesList())
      const socket = socketIOClient("http://localhost:5000/");
      socket.on("newNotice", data => {
        console.log('socket')
        console.log(data)
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
          <FlatList
            data={noticeList}
            renderItem={({ item }) => (
              <ListItem item={item} />
            )}
            keyExtractor={(item) => item._id}
          />
        </Box>
      )
}


export default Announcements
