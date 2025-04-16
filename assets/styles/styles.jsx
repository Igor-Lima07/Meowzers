// Os estilos usados na outra página, quem diria que o arquivo styles seria sobre estilos né?

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      backgroundColor: '#29ab9c',
    },
    tituloSite: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fac241',
      textAlign: 'center',
      marginBottom: 20,
    },
    descSite: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fac241',
        textAlign: 'center',
        marginBottom: 20,
      },
    lista: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      width: '45%', 
      margin: 10,
      padding: 16,
      backgroundColor: '#e8ffff',
      borderRadius: 10,
      shadowColor: '#29ab9c',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
      alignItems: 'center',
    },
    tituloGato: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fac241',
      textAlign: 'center',
      marginTop: 10,
    },
    erro: {
      fontSize: 18,
      color: 'red',
      textAlign: 'center',
      marginTop: 20,
    },
    imagem: {
      height: 250,
      width: '100%',
      borderRadius: 12,
      marginBottom: 16,
      resizeMode: 'contain'
    },
    imagemGato: {
      height: 120,
      width: 120,
      borderRadius: 12,
      marginBottom: 10,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    imagemGatoPlaceholder: {
      height: 120,
      width: 120,
      borderRadius: 12,
      marginBottom: 10,
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
    },
    nome: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fac241',
      marginBottom: 10,
    },
    descricao: {
      fontSize: 22,
      color: '#000',
      marginBottom: 15,
    },
    tituloDescricao: {
        fontSize: 25,
        color: '#fac241',
        marginBottom: 15,
        fontWeight: 'bold',
      },
    negrito: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#333',
    },
    botaoVoltar: {
      marginTop: 20,
      marginBottom: 20,
      paddingVertical: 10,
      backgroundColor: '#08f7ff',
      borderRadius: 8,
      width: '40%',
      alignSelf: 'center',
    },
    botaoVoltarTexto: {
      color: '#fac241',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    semImagem: {
      fontSize: 16,
      color: 'red',
      textAlign: 'center',
      marginBottom: 10,
    },
  });
  