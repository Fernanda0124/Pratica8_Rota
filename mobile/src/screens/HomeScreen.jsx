
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const products = [
  { id: 101, name: 'Tênis Esportivo' },
  { id: 102, name: 'Camiseta Dry-Fit' },
  { id: 103, name: 'Garrafa Térmica' },
];


function HomeScreen() {
  const navigation = useNavigation();

  const handleGoToDetails = (productId, productName) => {
    navigation.navigate('Details', { 
      productId: productId, 
      productName: productName 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Nossos Produtos</Text>
      <Text style={styles.subtitle}>Clique para ver os detalhes (Rota: Details)</Text>

      {/* Uso de FlatList para renderizar a lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name} (ID: {item.id})</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => handleGoToDetails(item.id, item.name)}
            />
          </View>
        )}
      />
      
      <View style={styles.separator} />
      <Button
        title="Ver Detalhe de Produto 999"
        onPress={() => handleGoToDetails(999, "Produto Inexistente")}
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, marginBottom: 15, color: '#666' },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  separator: { height: 20 }
});

export default HomeScreen;