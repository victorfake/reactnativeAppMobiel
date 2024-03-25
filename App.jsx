import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Person from './components/Person';
import Book from './components/Book';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      
      <Text style={styles.title}>Venda de Livros</Text>

      <Image
        source={
          require('./image/Livros Senhor dos Aneis.png')
        }
       
        />
    <Book 
    nome="Triologia Senhor dos aneis" 
    genero1=" Literatura fantástica" 
    genero2=" Alta fantasia" 
    genero3=" Ficção de aventura" 
    preço="150,00" />
            
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
});
