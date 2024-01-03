import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


const HamburgerDetail = ({ route }) => {
  const {item} = route.params
  const hamburger  = item;
  
  return (
    <View style = {{alignContent: "space-between", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
          <Image
             source={{ uri: hamburger.imagem }}
             style={{ width: 450, height: 300}}
         />
          <View style={{paddingTop:20, paddingBottom: 20, justifyContent: "space-between"}}>
             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{hamburger.nome}</Text>
          </View>
        <View style={{padding: 10}}>
          <Text style = {{fontWeight: "bold", fontSize: 20, textAlign: "justify"}}>{hamburger.descricao}</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style = {{fontWeight: "bold", fontSize: 15, textAlign: "left"}}>Serve 1 pessoa</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style = {{fontWeight: "bold", fontSize: 25, textAlign: "justify", color: "red"}}>R$ {hamburger.valor}</Text>
        </View>
      </View>  
    );
};

export default HamburgerDetail;