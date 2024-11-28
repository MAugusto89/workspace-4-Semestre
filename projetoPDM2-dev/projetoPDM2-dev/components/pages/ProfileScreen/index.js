import * as React from "react";
import { View, Image } from "react-native";
import { styles } from "./style";
import { TextInput, Button, Text, TouchableRipple } from "react-native-paper";

export function ProfileScreen({ navigation }) {
  const [email, setTextEmail] = React.useState("");
  const [password, setTextPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/img.png")} style={styles.image} />
      <TextInput
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setTextEmail}
        style={styles.input}
        theme={{
          colors: {
            background: "#f3f3f3", // Cor de fundo do input
            primary: "#4aaae5", // Cor da borda ativa e do cursor
            underlineColor: "#4aaae5", // Cor da linha inferior
          },
        }}
      />
      <TextInput
        label="Senha"
        secureTextEntry
        value={password}
        onChangeText={setTextPassword}
        style={styles.input}
        theme={{
          colors: {
            primary: "#4aaae5", // Cor da borda ativa e do cursor
            underlineColor: "#4aaae5", // Cor da linha inferior
            background: "#f3f3f3", // Cor de fundo do input
          },
        }}
        keyboardType="visible-password"
        right={<TextInput.Icon icon="eye" />}
      />

      <View style={styles.linkContainer}>
        <TouchableRipple
          onPress={() => navigation.navigate("EsqueciSenhaScreen")}
        >
          <Text style={styles.link}>Esqueci a senha!</Text>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate("CadastroScreen")}>
          <Text style={styles.link}>Fazer Cadastro</Text>
        </TouchableRipple>
      </View>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Home")}
        style={styles.buttonLogin}
      >
        Entrar
      </Button>
      <Button
        mode="outlined" // Define o tipo do botão (text, contained, outlined)
        icon={({ size }) => (
          <Image
            source={require("../../../assets/logoGoogle.png")}
            style={{ width: size, height: size, borderRadius: size / 6 }}
            accessibilityIgnoresInvertColors
          />
        )}
        onPress={() => console.log("Login com Google")}
        style={styles.buttonGoogle} // Define a cor de fundo
        labelStyle={styles.labelStyle} // Define o estilo do texto
      >
        Login com Google
      </Button>
    </View>
  );
}
