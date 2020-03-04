import React, { useState } from "react";
import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');


  async function onLoginPress() {
    if (password == 'admin' && username == 'admin') {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Erro',
        `Login/Senha invalidos!`,
      );
    }
  }
  return (   
     <>
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Gluten Free</Text>
            <TextInput value={username} onChangeText={setUsername} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput value={password} onChangeText={setPassword} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </>
  );
}
