import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,TouchableOpacity} from 'react-native';
//import { Button  } from 'react-native-elements'
import { useSelector,useDispatch } from 'react-redux';
import color from '../../constants/color';
import * as buisnessAction from '../../store/actions/businessAction';


const AddLocation=({navigation,route,props})=> {

const dispatch=useDispatch();
const[location,setLocation]=useState();
const{BuisId}=route.params;
const saveLocation =()=>{
  dispatch(buisnessAction.AddLocation(BuisId,location))
  navigation.pop();
}

  return (
    <View style={styles.container}>
        <View style={{marginHorizontal:25}}>
            <View style={{height:50,width:200,marginTop:50,marginLeft:60}}>
       <Image style={{height:'100%',width:'100%'}}  source={require('../../assets/Capture.png')}/>
       </View>
       <View style={{marginTop:40}}>
           <Text style={{fontWeight:'bold',fontSize:20}}>Add New Location</Text>
       </View>
      <View style={{marginTop:30}}>
      <Text style={{fontSize:18,marginLeft:5}}>Location Nick Name</Text> 
      <TextInput style={styles.textinput} value={location} onChangeText={value=>setLocation(value)} placeholder='Location'/>
      </View>
      
      
      
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:35}}>
      <View style={styles.customButton}>
          <TouchableOpacity onPress={()=>saveLocation()}>
          <Text style={{color:'white',fontSize:16}}>Save</Text>
          </TouchableOpacity>
      </View>
      <View style={{...styles.customButton,backgroundColor:'white'}}>
          <TouchableOpacity onPress={()=>navigation.pop()}>
          <Text style={{color:'black',fontSize:16}}>Cancel</Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa'
  },
  textinput:{
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    fontSize:18,
    elevation:3,
    paddingLeft:20,
    height: 50, 
    marginTop:5,
    
     borderRadius:24,
     
     backgroundColor:'#ffffff'
  },
  customButton:{
    backgroundColor:color.blue,
    alignItems:'center',
    borderRadius:24,
     paddingVertical:14,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    width:140,
    elevation:3,
  }
});

export default AddLocation;