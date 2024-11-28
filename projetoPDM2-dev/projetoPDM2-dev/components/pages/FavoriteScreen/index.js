import * as React from "react";
import {
  Button,
  Provider as PaperProvider,
  Card,
  IconButton,
  Text,
  Appbar,
} from "react-native-paper";
import { styles } from "./style";
import { View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export function FavoriteScreen() {

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Text variant="displaySmall">Seus Favoritos</Text>
      </Appbar.Header>
      <View style={styles.body}> 
        <Card style={styles.card}>
          <View style={styles.favoriteButton}>
            <IconButton
              icon="bookmark"
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
      </View>
    </View>
  );
}
