import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, TextInput, View } from "react-native";
import { Styles } from "../src/style";
import { auth } from "../src/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";

export default function App() {
  const [userMail, setUserMail] = useState("");
  const [userPass, setuserPass] = useState("");
  const router = useRouter();

  function userlogin() {
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.formTitle}>Login My App</Text>
      <TextInput
        style={Styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput
        style={Styles.formInput}
        placeholder="Informe a Senha"
        autoCapitalize="none"
        value={userPass}
        onChangeText={setuserPass}
        secureTextEntry
      />
      <Pressable onPress={userlogin} style={Styles.formButton}>
        <Text style={Styles.textButton}>Entrar</Text>
      </Pressable>
      <View style={Styles.subContainer}>
        <Pressable style={Styles.subButton}>
          <Text style={Styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={Styles.subButton}>
          <Text style={Styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
