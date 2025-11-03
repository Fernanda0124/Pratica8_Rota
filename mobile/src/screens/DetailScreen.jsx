
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';


function DetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  
 
  const { productId, productName } = route.params;

  const productDetails = {
    101: 'Ideal para corrida e caminhada leve.',
    102: 'Tecido leve e respirável, secagem rápida.',
    103: 'Mantém sua bebida gelada por até 24h.',
  };

  const description = productDetails[productId] || 'Detalhes genéricos não disponíveis.';
  const isFound = productDetails.hasOwnProperty(productId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isFound ? 'Detalhes do Produto' : ' Produto Não Encontrado (Simulação)'}
      </Text>
      
      <View style={styles.detailsBox}>
        <Text style={styles.info}>*Nome:* {productName}</Text>
        <Text style={styles.info}>*ID da Rota:* {productId}</Text>
        <Text style={styles.info}>*Descrição:* {description}</Text>
      </View>
      
      <Button 
        title="← Voltar para a Lista" 
        onPress={() => navigation.goBack()} 
      />
      
      <View style={styles.separator} />

      <Button 
        title="Voltar para a Home (Pilha limpa)" 
        onPress={() => navigation.popToTop()} 
        color="#3498db"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  detailsBox: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#eee'
  },
  info: { fontSize: 16, marginBottom: 8 },
  separator: { height: 10 }
});

export default DetailScreen;