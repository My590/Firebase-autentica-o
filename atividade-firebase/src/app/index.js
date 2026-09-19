import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { cadastrar } from '../services/auth';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter();

  async function realizarCadastro() 
    {
        if(!email || !senha)
        {
            alert('Preencha todos os campos')
            return
        }

        try 
        {
            await cadastrar (email,senha)
            alert('Usuário cadastrado!')
            router.push('/Login');

        } catch(error)
        {
            alert('Não foi possivel cadastrar o usuário.')
            console.log(error)
        }
    }

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.text}>Preencha seus dados para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#6e6262"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#6e6262"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={realizarCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Login')}>
            <Text style={styles.text}> Já tem uma conta? Faça login </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 6,
        alignSelf: 'center',
    },
  text: {
        fontSize: 14,
        color: '#2e2525',
        marginBottom: 24,
        alignSelf: 'center',
    },
  input: {
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 15,
        color: '#1A1A1A',
        marginBottom: 16,
    },
  button: {
        backgroundColor: '#0066FF',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
  buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});