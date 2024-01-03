import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import {collection, doc, getDoc, getDocs} from "firebase/firestore"
import db from "./Firebase"
import { useEffect, useState } from "react";


function ExibirItem({item, index, navigation}){

    function localSelecionado(){
        console.log("Item Selecionado" = $,{index})
        navigation.navigate('Detalhes', {item:item})
    }

    return(
        <View>
            <TouchableOpacity onPress={localSelecionado}>
                <View style = {{flex: 1, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "grey", flexDirection: "row"}}>
                    <View style = {{justifyContent: "center", alignItems: "center", padding: 5}}>
                        <Image
                        source = {{uri: item.imagem}}
                        style = {{width: 150, height: 150, alignItems: "center", justifyContent: "center"}}/>
                    </View>
                    <View style={{maxWidth: 220}}>
                        <Text style = {{fontSize: 25, fontWeight: "bold", textAlign: "center"}}>{item.nome}</Text>
                        <Text style = {{fontSize: 18, textAlign: "justify", padding: 10, fontWeight: "bold"}}>{item.descricao}</Text>
                        <Text style = {{fontSize: 25, textAlign: "center", fontWeight: "bold", color: "red"}}>R$ {item.valor}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

export default function Cardapio({navigation}){
    const [hamburguers, setHamburgueres] = useState([])

    async function pegar(){
        const collectionRef = collection(db,"hamburguers")
        const docsSnap = await getDocs(collectionRef);
        const lista = docsSnap.docs.map((item) => item.data())

        setHamburgueres(lista);
    }
    
    useEffect(()=>{
        pegar();
    },[]);

    return(
        <View style={{}}>
            {
                (hamburguers.length === 0) ?
                <Text>Lista Vazia</Text> :
                <View style={{}}>
                    <FlatList
                        data={hamburguers}
                        renderItem={ ({item}) => <ExibirItem item={item} navigation={navigation}/>  }
                    />
                </View>
            }
        </View>
        
    )

}