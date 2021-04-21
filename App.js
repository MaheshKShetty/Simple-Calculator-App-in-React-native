
import React from 'react';
import {SafeAreaView,StyleSheet, View,} from 'react-native';
import InputButton from "./InputButton";

const App = ()  => {

  const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']];

  const _renderButtons = () => {
      let views = [];
      for (var r = 0; r < inputButtons.length; r ++) {
          let row = inputButtons[r];
          let inputRow = [];
          for (var i = 0; i < row.length; i ++) {
              let input = row[i];
              inputRow.push(
                  <InputButton value={input} key={r + "-" + i} />
              );
          }
          views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
      }
      return views;
  }  
 
  return (
    <View style ={styles.sectionContainer}>
    <SafeAreaView style ={styles.sectionContainer}>
     <View style ={styles.OuputContainer}></View>
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
    backgroundColor:'#193441'
  },
  InputContainer : {
    flex:8,
    backgroundColor: '#3E606F'
  }
});

export default App;
