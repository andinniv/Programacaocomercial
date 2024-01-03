import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const Menu = ({ navigation }) => {
  const goToLista = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://gifs.eco.br/wp-content/uploads/2023/03/imagens-de-logo-hamburgueria-png-9.png",
        }}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          margin: 20,
          borderRadius: 100,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: 30,
        }}
      >
        {" "}
        Bem Vindo ao Burguer Foods!
      </Text>
      <MenuItem
        url={
          "https://delikatessenbuffet.com.br/storage/app/uploads/ccMR2fgLALRxPpTYAforttQMLu2EZrLkgNecIlFl.jpg"
        }
        label={"Hamburguers"}
        onPress={() => goToLista("HamburguerLista")}
      />
      <MenuItem
        url={
          "https://extralab.com.br/sistema1/arquivos/imagens/extralab/img/post_1796_20210115141240_0.jpeg"
        }
        label={"Bebidas"}
        onPress={() => goToLista("BebidasLista")}
      />
      <MenuItem
        url={
          "https://entendendoacozinha.com.br/wp-content/uploads/2023/10/10-sobremesa-gelada.webp"
        }
        label={"Sobremesas"}
        onPress={() => goToLista("SobremesasLista")}
      />
    </View>
  );
};

function MenuItem(props) {
  return (
    <View>
      <TouchableOpacity style={styles.menuCardapio} onPress={props.onPress}>
        <Image source={{ uri: props.url }} style={styles.menuImagem} />
        <Text style={styles.menuText}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  menuCardapio: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  menuImagem: {
    width: 80,
    height: 80,
    borderRadius: 30,
    alignItems: "baseline",
  },
  menuText: {
    fontSize: 20,
    padding: 40,
  },
});

export default Menu;
