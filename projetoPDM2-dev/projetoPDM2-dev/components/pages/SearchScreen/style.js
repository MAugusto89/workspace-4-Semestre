import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "10%",
    backgroundColor: "#f6f6f6",
  },
  top: {
    flexDirection: "row", // Organiza os itens em linha
    justifyContent: "space-between", // Espaçamento entre os itens
    width: "100%", // Faz com que ocupe a largura total
    paddingHorizontal: 16,
    marginTop: "15%",
  },
  searchBar: {
    flex: 1, // Ocupará o máximo de espaço disponível
    borderRadius: 16,
    backgroundColor: "gray",
  },
});
