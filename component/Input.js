import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

 const Input =(props) =>
       <TextInput  
            placeholder={props.texto} 
            style={styles.input}
            onChangeText={props.campo}
            value={props.valor}>
       </TextInput>
                               
const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        width:240,
        marginVertical:5
     },

});

export default Input;