import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Person from './components/Person';
import Book from './components/Book';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      
      
      <Text style={styles.title}>Venda de Livros</Text>

      <Image
        source={require('./image/Livros Senhor dos Aneis.png')}
        style={styles.image}
       />
    <Book style={styles.book}
    nome="Triologia Senhor dos aneis" 
    genero1=" Literatura fantástica" 
    genero2=" Alta fantasia" 
    genero3=" Ficção de aventura" 
    preço="150,00" />

  <Image
        source={require('./image/diario_de_um_banana.png')}
        style={styles.image}
       />

  <Book style={styles.book}
    nome="Coleção Diario de um banana" 
    genero1="Humor" 
    genero2="Ficção Juvenil" 
    genero3="Comedia" 
    preço="999,99" />
            
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf:'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  book: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#2F4F4F',
    alignItems: 'center',
    textAlign: 'center',
  }
});
