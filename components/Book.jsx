import { View, Text } from 'react-native'
import React from 'react'

const Book = () => {
  return (
    <View>
        <Text>Nome do Livro é {props.nome}</Text>
        <Text></Text>
    </View>
  )
}

export default Book