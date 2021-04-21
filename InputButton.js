import React from 'react';
import {StyleSheet, View,Text,TouchableHighlight} from 'react-native';

const InputButton = (props) => {
   return(
       <TouchableHighlight style ={styles.inputButton} underlayColor="#193441" onPress={props.onPress}>
        <Text style={styles.inputButtonText}>{props.value}</Text>
       </TouchableHighlight>);
}

const styles = StyleSheet.create({
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default InputButton;