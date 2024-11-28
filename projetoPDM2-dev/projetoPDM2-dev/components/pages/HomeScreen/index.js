import * as React from "react";
import {
  Searchbar,
  Button,
  Provider as PaperProvider,
  Card,
  IconButton,
  Text,
} from "react-native-paper";
import { styles } from "./style";
import { View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img2.png")} // Verifique o caminho da imagem
        style={styles.topImage} // Estilo alterado
      />

      <View style={styles.search}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          iconColor="#F6F6F6"
          placeholderTextColor="#F6F6F6"
        />
        <IconButton
          icon="filter"
          color="#ff0000"
          size={32}
          onPress={() => console.log("Filtro Clicado")}
        />
      </View>

      <View style={styles.body}>
        <Card style={styles.card}>
          <View style={styles.favoriteButton}>
            <IconButton
              icon="bookmark-outline"
              size={32}
              onPress={() => console.log("Item favoritado!")}
            />
          </View>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.image}
          />
          <Card.Content>
            <Text style={styles.name}>Nome do Produto</Text>
            <Text style={styles.description}>
              Breve descrição do produto para exibição.
            </Text>
            <Text style={styles.price}>R$ 99,99</Text>
          </Card.Content>

          <Card.Actions>
            <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }, (_, index) => (
                <Feather
                  key={index}
                  name="star"
                  size={20}
                  color="#FFD700"
                  style={styles.star}
                />
              ))}
            </View>
            <Button onPress={() => console.log("Mais detalhes")} style={styles.buttonCard}>
              Ver detalhes
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <View style={styles.favoriteButton}>
            <IconButton
              icon="bookmark-outline"
              size={32}
              onPress={() => console.log("Item favoritado!")}
            />
          </View>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.image}
          />
          <Card.Content>
            <Text style={styles.name}>Nome do Produto</Text>
            <Text style={styles.description}>
              Breve descrição do produto para exibição.
            </Text>
            <Text style={styles.price}>R$ 99,99</Text>
          </Card.Content>

          <Card.Actions>
            <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }, (_, index) => (
                <Feather
                  key={index}
                  name="star"
                  size={20}
                  color="#FFD700"
                  style={styles.star}
                />
              ))}
            </View>
            <Button onPress={() => console.log("Mais detalhes")}>
              Ver detalhes
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}
