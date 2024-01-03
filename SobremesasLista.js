import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import db from "./Firebase";
import { useEffect, useState } from "react";

function ExibirItem({ item, navigation }) {
  function goToDetalhes() {
    navigation.navigate("SobremesasDetalhes", { item: item });
  }

  return (
    <View style={{ padding: 15, borderBottomWidth: 1 }}>
      <TouchableOpacity onPress={goToDetalhes}>
        <View
          style={{
            flexDirection: "row",
            maxWidth: 200,
          }}
        >
          <Image
            style={{
              height: 110,
              width: 110,
              margin: 10,
              borderRadius: 20,
            }}
            source={{ uri: item.imagem }}
          />
          <View style={{ flexDirection: "column", padding: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                paddingBottom: 10,
              }}
            >
              {item.nome}
            </Text>
            <Text
              style={{
                fontWeight: "600",
              }}
            >
              {item.descricao}
            </Text>
            <Text
              style={{
                color: "dodgerblue",
                fontWeight: "bold",
                paddingTop: 10,
                fontSize: 20,
              }}
            >
              Valor: R${item.valor.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function SobremesasList({ navigation }) {
  const [sobremesas, setSobremesas] = useState([]);

  async function pegar() {
    const collectionRef = collection(db, "sobremesas");
    const docsSnap = await getDocs(collectionRef);
    const lista = docsSnap.docs.map((item) => item.data());

    setSobremesas(lista);
  }

  useEffect(() => {
    pegar();
  }, []);

  return (
    <View style={{}}>
      {sobremesas.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 100 }}>Lista Vazia</Text>
      ) : (
        <View style={{}}>
          <FlatList
            data={sobremesas}
            renderItem={({ item }) => (
              <ExibirItem item={item} navigation={navigation} />
            )}
          />
        </View>
      )}
    </View>
  );
}
