import * as React from "react";
import {
  IconButton,
  Searchbar,
  Provider as PaperProvider,
} from "react-native-paper";
import { styles } from "./style";
import { View } from "react-native";

export function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
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

      <View style={styles.bodySearch}></View>
    </View>
  );
}
