import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { sair } from '../services/auth';
import { auth } from '../../config/firebase';

export default function Home({ navigation }) {

  async function realizarLogout() {
    await sair();
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Seja bem-vindo {auth.currentUser?.email}
      </Text>

      <TouchableOpacity style={styles.button} onPress={realizarLogout}>
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#FF6B6B',
    width: 150,
    height: 35,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
