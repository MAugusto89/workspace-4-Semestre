import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },
  image: {
    marginBottom: 16,
    width: "100%",
    height: "30%",
    resizeMode: "contain", // Ajusta a imagem ao espaço
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#f6f6f6',
  },
  buttonLogin: {
    padding: 5,
    backgroundColor: "#4aaae5",
    color: "#ffffff",
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonGoogle: {
    margin: 10, // Espaçamento ao redor do botão
    borderRadius: 5, // Arredondamento do botão
    borderColor: '#4aaae5',
  },
  labelStyle: {
    color: '#000000', // Cor do texto
    fontWeight: 'bold', // Texto em negrito
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 2,
  },
  link: {
    fontSize: 16,
    fontWeight: "400",
  },
});
