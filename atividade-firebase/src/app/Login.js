import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { useState } from 'react'
import { entrar } from '../services/auth'
import { useRouter } from 'expo-router';

export default function Login(){
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')
    
    const router = useRouter()

    async function realizarLogin()
    {
        if(!email || !senha)
        {
            alert('Preencha todos os campos')
            return
        }

        try 
        {
            await entrar (email, senha)
            router.push('/Home')

        } 

        catch(error)
        {
            alert('Email ou senha incorretos.')
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
            style={styles.input}
            placeholder = "email"
            placeholderTextColor="#6e6262"
            value = {email}
            onChangeText = {setEmail}
            keyboardType = 'email-address'
            autoCapitalize = 'none'
            />

            <TextInput
            style={styles.input}
            placeholder = "senha"
            placeholderTextColor="#6e6262"
            value = {senha}
            onChangeText = {setSenha}
            secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={realizarLogin}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            
            <Text style={styles.text}> Ou </Text>

            <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
                    <Text style={styles.buttonText}> Criar conta </Text>
            </TouchableOpacity>
            
        </View>
    )
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
        marginTop: 5,
        marginBottom: 5,
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