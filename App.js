
import React,{useState} from 'react';
import {SafeAreaView,StyleSheet, View,Text} from 'react-native';
import InputButton from "./InputButton";

const App = ()  => {

  const inputButtons = [[1, 2, 3, '/'],[4, 5, 6, '*'],[7, 8, 9, '-'],[0, 'C', '=', '+']];
  const [inputValue,setInputValue]= useState(0) ;  
  const [previousInputValue,setPreviousInputValue]= useState(0) ;  
  const [operation,setOperation]= useState(null) ;  

  const _renderButtons = () => {
      let views = [];
      for (var r = 0; r < inputButtons.length; r ++) {
          let row = inputButtons[r];
          let inputRow = [];
          for (var i = 0; i < row.length; i ++) {
              let input = row[i];
              inputRow.push(
                  <InputButton value={input} key={r + "-" + i} onPress = {_onInputButtonPressed.bind(this,input)}/>
              );
          }
          views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
      }
      return views;
  }  

  const _onInputButtonPressed = (input) => {
    switch(typeof input) {
      case 'number' :
        let number = (inputValue*10)+ input
        setInputValue(number)
        break;
      case 'string' :
        _handleString(input)
        break;
    }
  } 

  const _handleString = (input) => {
    switch (input) {
        case '/':
        case '*':
        case '+':
        case '-':
          setOperation(input)
          setPreviousInputValue(inputValue)
          setInputValue(0)
          break;
        case '=':
          if (!operation) {
              return;
          }
          setPreviousInputValue(0)
          setInputValue(eval(previousInputValue + operation + inputValue))
          setOperation(null)
          
        break;
        case 'C':
          setPreviousInputValue(0)
          setInputValue(0)
          setOperation(null)
          break;
    }
  }
 
  return (
    <View style ={styles.sectionContainer}>
    <SafeAreaView style ={styles.sectionContainer}>
     <View style ={styles.OuputContainer}>
     <Text style={styles.displayText}>{inputValue}</Text>
     </View>
     <View style ={styles.InputContainer}>{_renderButtons()}</View>
    </SafeAreaView>
    </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  OuputContainer:{
    flex:2,
    backgroundColor:'#808080'
  },
  InputContainer : {
    flex:8,
    backgroundColor: '#778899'
  },
  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },
});

export default App;
