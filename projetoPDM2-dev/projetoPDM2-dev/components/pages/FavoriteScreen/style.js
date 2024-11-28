import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },
  header: {
    backgroundColor: "transparent",
    textAlign: 'center', // Centraliza o título
    marginVertical: 20,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "40%",
  },
  body: {
    height: "60%",
    width: "100%",
  },
  searchBar: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: "gray",
  },


  card: {
    margin: 2,
    borderRadius: 16,
    elevation: 8,
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1, // Garante que o botão fique sobre a imagem
  },
  image: {
    borderRadius: 8,
    width: "100%",
    height: 200,
    resizeMode: "cover", // Ajusta a imagem ao espaço sem cortar
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4aaae5",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row", // Coloca as estrelas lado a lado
    alignItems: "center",
    marginRight: 8, //Espaço do Button Saiba Mais
  },
  star: {
    marginHorizontal: 2, // Espaço entre as estrelas
  },
  card: {
    backgroundColor: "#ffffff",
  },
  buttonCard: {
    backgroundColor: "#4aaae5",
  }
});
