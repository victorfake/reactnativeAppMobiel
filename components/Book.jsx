import { View, Text } from 'react-native'
import React from 'react'

const Book = (props) => {
  return (
    <View>
        <Text>Titulo: {props.nome ? props.nome: "Não Informado"}</Text>
        <Text>Gênero: {props.genero1 ? props.genero1: "Não Informado"}, {props.genero2 ? props.genero2: "Não Informado"}, {props.genero3 ? props.genero3: ""}</Text>
        <Text>Preço: {props.preço ? props.preço: "Não Informado"}</Text>
    </View>
  )
}

export default Book