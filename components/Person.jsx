import { View, Text } from 'react-native'
import React from 'react'

const Person = (props) => {
  return (
    <View>
      <Text>Meu Nome é {props.nome ? props.nome : "Não Identificado"}</Text>
      <Text>Minha Idade é {props.idade ? props.idade : "Não Indetificado"}</Text>
      <Text>Meu telefone é {props.telefone ? props.telefone : "Não Indetificado"}</Text>

      {props.menor && 
      <Text>
        Esta Pessoa é menor de idade!        
        </Text>}
    </View>
  )
}

export default Person