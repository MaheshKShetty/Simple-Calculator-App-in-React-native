import React from 'react';
import {StyleSheet, View,Text} from 'react-native';

const InputButton = (props) => {
   return(
       <View style ={styles.inputButton}>
        <Text style={styles.inputButtonText}>{props.value}</Text>
       </View>);
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