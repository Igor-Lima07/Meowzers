import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { styles } from '../assets/styles/styles'

// A chave da API dos gato, ela funciona sem chave mas não dá pra ter imagem

const API_KEY = 'live_gtSynRyJMgKPnpG0B6br0ZNTZBZVmyXOM79f71RLgVlBcQXID9KSUBWkNmOwVkTy';

export default function Index() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [gatoSelecionado, setGatoSelecionado] = useState(null);

  // O axios carrega os dados da API

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': API_KEY,  // Isso aqui adiciona a chave da API nos cabeçalho de requisição
      }
    })
    .then(res => {
      setDados(res.data);
      setCarregando(false);
    })
    .catch(() => setErro('Erro ao carregar os dados.')) // Caso algo faça com que os dados não sejam carregados, ocorre um erro
  }, []);

  if (carregando) return <ActivityIndicator style={{ marginTop: 20 }} />; // O indicador de carregamento, o arco que fica girando
  if (erro) return <Text style={styles.erro}>{erro}</Text>; // Mostra a mensagem de erro

  const selecionarGato = (gato) => {
    setGatoSelecionado(gato);
  };

// Se uma raça de gato é clicada, mostra os detalhes desta raça, puxando dados da API
// Quem fez a API não gosta de brasileiros então os dados estão em inglês

  if (gatoSelecionado) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {gatoSelecionado.image?.url ? (
          <Image source={{ uri: gatoSelecionado.image.url }} style={styles.imagem} />
        ) : (
          <Text style={styles.semImagem}>Imagem não disponível</Text> //Se a imagem não é achada, colocal esse textinho
        )}
        <Text style={styles.nome}>{gatoSelecionado.name}</Text>
        <Text style={styles.descricao}>{gatoSelecionado.description}</Text>
        <Text style={styles.descricao}><Text style={styles.tituloDescricao}>Origem:</Text> {gatoSelecionado.origin}</Text>
        <Text style={styles.descricao}><Text style={styles.tituloDescricao}>Temperamento:</Text> {gatoSelecionado.temperament}</Text>
        <Text style={styles.descricao}><Text style={styles.tituloDescricao}>Expectativa de vida:</Text> {gatoSelecionado.life_span} anos</Text>
        <TouchableOpacity onPress={() => setGatoSelecionado(null)} style={styles.botaoVoltar}>
          <Text style={styles.botaoVoltarTexto}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // Tela padrão do aplicativo, lista todos os gatos e cria botôes que podem ser clicados pra acessar os dados do gato
  return (
    <View style={styles.container}>
      <Text style={styles.tituloSite}>Meowzers</Text>
      <Text style={styles.descSite}>Uma distribuição não oficial Encanto Pet</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => selecionarGato(item)}
          >
            {item.image?.url ? (
              <Image source={{ uri: item.image.url }} style={styles.imagemGato} />
            ) : (
              <View style={styles.imagemGatoPlaceholder}><Text>Opa, deu erro</Text></View> // Se a imagem não é encontrada, substitui por isso aqui
            )}
            <Text style={styles.tituloGato}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

