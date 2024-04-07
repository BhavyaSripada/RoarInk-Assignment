
import React,{useState} from 'react';
import { View, TextInput,StyleSheet,Text,TouchableOpacity,Button,Alert} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';

export default function Login() {
  
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

  
    const signIn = async () => {
        try {
          const response = await signInWithEmailAndPassword(auth, email, password);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      
      const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Registered
              const user = userCredential.user;
              alert('Registered, please login.');
              })
              .catch((error) => {
                  alert(error.message);
              });
            }
   
  return (
    <View style={styles.container}>
    <Text style={styles.displayText}>Welcome Back!</Text>
    <View style={styles.inputView}>
    <TextInput  style={styles.inputText}
    onChangeText={(text)=>setEmail(text)}
    value={email}
    autoCapitalize='none'/>
     </View>
     <View style={styles.inputView}>
     <TextInput style={styles.inputText}
     secureTextEntry={true}
     onChangeText={(text)=>setPassword(text)}
     value={password}
     autoCapitalize='none'
     />
     </View>
      <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp}>
        <Text style={styles.signUpText}>Don't have an account?Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#121212'
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#003f5c',
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#282828',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 30,
    },
    inputText: {
      height: 50,
      color:'white',
    },
    loginBtn: {
      width: '50%',
      backgroundColor: '#cc8dd4',
      borderRadius: 25,
      height: 60,
      padding:20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginText: {
      color: '#1f1720',
      fontWeight:'700',
    },
    displayText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        padding:20
    },
    signUpText:
    {
        color:'white'
    }
     }
);
