import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "auto",
    height: "auto",
    padding: "6%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },
  topImage: {
    width: "100%",
    height: "24%",
    resizeMode: "contain",
  },
  search: {
    height: "26%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    height: "50%",
    width: "100%",
  },
  searchBar: {
    flex: 1, // Ocupará o máximo de espaço disponível
    borderRadius: 16,
    backgroundColor: "gray",
  },
  card: {
    margin: 2,
    borderRadius: 16, // Bordas arredondadas do card
    elevation: 8, // Sombra para Android
  },
  favoriteButton: {
    position: "absolute", // Posiciona no canto superior direito
    top: 8,
    right: 8,
    zIndex: 1, // Garante que o botão fique sobre a imagem
  },
  image: {
    borderRadius: 8, // Bordas arredondadas do card
    width: "100%",
    height: 200, // Altura da imagem
    resizeMode: "cover", // Ajusta a imagem ao espaço
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
    marginRight: 8,
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
