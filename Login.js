
import React from 'react';
import {Text,View,TextInput, TouchableOpacity, Alert} from 'react-native';

const Login = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>DOLU MU</Text>
            <Text>MEMBER REGISTRATION</Text>
            <View style = {styles.viewstyle}>
            <TextInput style = {styles.textInput} 
            placeholder = 'Enter Your Name'
            />
            <TextInput style = {styles.textInput} 
            placeholder = 'Enter Your Surname'
            />
            <TextInput style = {styles.textInput} 
            placeholder = 'Enter Your E - mail'
            />
            <TextInput style = {styles.textInput} 
            placeholder = 'Enter Your Password'
            />
            <TouchableOpacity 
            onPress = {()=> Alert.alert('Registration Successful')}>
                <View style = {styles.button}>
                    <Text style = {styles.login}>LOGIN</Text>
                </View>
            </TouchableOpacity>
            </View>    
        </View>
        
    );
};
const styles = {
    container:{
        flex: 1,
        backgroundColor: '#f4a460',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 40,
        margin: 10
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 8,
        width: 250
    },
    viewstyle:{
        flex:1,
        padding: 80
    },
    button:{
        borderRadius: 12,
        alignItems: 'center',
        paddingVertical: 15,
        margin: 30,
        backgroundColor: 'grey'
    },
    login:{
        fontSize: 20
    }
}

export default Login;


