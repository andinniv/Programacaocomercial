import { View, Text, Image, Alert, TouchableOpacity } from "react-native";

const AdicionarPedido = () => {
  Alert.alert("Pedido Adicionado!", "Pedido adicionado com sucesso!");
};

const BebidaDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ borderBottomWidth: 2 }}>
        <Image
          style={{ height: 250, width: 300, margin: 20, borderRadius: 50 }}
          source={{ uri: item.imagem }}
        />
      </View>
      <View style={{ maxWidth: 300 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            padding: 15,
            fontWeight: "900",
          }}
        >
          {item.nome}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>{item.descricao}</Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            color: "dodgerblue",
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Valor: R${item.valor.toFixed(2)}
        </Text>
        <TouchableOpacity onPress={AdicionarPedido}>
          <View
            style={{
              backgroundColor: "dodgerblue",
              padding: 10,
              marginTop: 30,
              borderWidth: 1,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Adicionar Pedido
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BebidaDetail;
