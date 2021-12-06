import React from 'react'
import { Box, HStack, VStack, Text, Spacer, WarningOutlineIcon, QuestionOutlineIcon, MinusIcon } from 'native-base'

import {formatD} from '../services/dateService'

const AnnouncesListItem = ({item}) => {
    return (
        <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "gray.600",
        }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2"
      >
        <HStack space={3} justifyContent="space-between">
          {item.type === "Urgent" ? <WarningOutlineIcon /> : item.type === "Warning" ? <MinusIcon /> : <QuestionOutlineIcon />}
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {item.title}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.description}
            </Text>
          </VStack>
          <Spacer />
          <Text
            fontSize="xs"
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            alignSelf="flex-start"
          >
            {formatD(item.postedAt)}
          </Text>
        </HStack>
      </Box>
    )
}

export default AnnouncesListItem
