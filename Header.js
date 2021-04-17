//import libraries
import React from 'react';
import {Text,View,TextInput, TouchableOpacity, Alert} from 'react-native';
//create component

const Header = props => {
    const {textStyling, viewStyle} = styles;
    return(
        <View style = {viewStyle}>
         <Text style = {textStyling}>{props.title}</Text>
        </View>
    );
};

const styles = {
    textStyling: {
        //textAlign: 'center', //yazinin ortada olmasi
        //marginVertical: 8, //kirmizi alan asagi buyur
        fontSize: 50
    },

    viewStyle: {
        backgroundColor: 'red',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
//make component available to other components
export default Header;


//justifyContent : flex-end/flex-start/center -> dusey eksen uzeri hizalama
//alingItems : flex-start/flex-end/center -> yatay eksen hizalar