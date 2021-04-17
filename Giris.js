
import React from 'react';
import {Text,View,TextInput, TouchableOpacity, Alert} from 'react-native';

const Giris = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>DOLU MU</Text>
            <Text>FIRST PAGE</Text>
            <View style = {styles.viewstyle}>
            <TouchableOpacity 
            onPress = {()=> Alert.alert('goto member login page')}>
                <View style = {styles.button}>
                    <Text style = {styles.login}>Member Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress = {()=> Alert.alert('goto member registration page')}>
                <View style = {styles.button}>
                    <Text style = {styles.login}>Member Sign Up</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress = {()=> Alert.alert('goto admin login page')}>
                <View style = {styles.button}>
                    <Text style = {styles.login}>Admin Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress = {()=> Alert.alert('goto admin registration page')}>
                <View style = {styles.button}>
                    <Text style = {styles.login}>Admin Sign Up</Text>
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
    viewstyle:{
        flex:1,
        padding: 80
    },
    button:{
        borderRadius: 12,
        alignItems: 'center',
        paddingVertical: 15,
        margin: 10,
        backgroundColor: '#00A4CCFF',
        width: 250
    },
    login:{
        fontSize: 20
    }
}

export default Giris;


