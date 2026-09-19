import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { sair } from '../services/auth';
import { auth } from '../../config/firebase';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  async function realizarLogout() {
    await sair();
    router.push('/Login');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
       Te recebemos com alegria, {auth.currentUser?.email}
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
