import React from 'react'
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const ItemLibro = (props) => (
    <View style={styles.cardView}>
       <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
             {props.nombre}
       </Text>
       <Text style={{textTransform: 'uppercase', color:'green'}} >
            {props.edicion}
       </Text> 
       <View style={{flexDirection:'row-reverse'}}>
       <TouchableOpacity  style={{marginHorizontal:10}}
         onPress={props.getlibro.bind(this, props)} >
         <Ionicons name="md-create" size={36} color="#07C71F" />
      </TouchableOpacity>
       <TouchableOpacity  
         onPress={props.mypress.bind(this, props)} >
         <Ionicons name="md-trash" size={36} color="#F1113D" />
      </TouchableOpacity>
      </View>

   </View>
  );
  
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical:5,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      }

});

  export default ItemLibro;