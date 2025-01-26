import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Chat = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-black'>Chat</Text>
    </SafeAreaView>
  )
}

export default Chat