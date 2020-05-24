import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,ScrollView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
//import { Button  } from 'react-native-elements'
import color from '../../constants/color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ModalSelector from 'react-native-modal-selector'



const Terminate=({navigation,route,props})=> {



  return (
    <KeyboardAvoidingView
    style={{flex:1 }}
    behavior='padding'
    keyboardVerticalOffset={15}
  >
    <ScrollView  style={{flex:1,backgroundColor:'#f7f8fa'}} bounces={true}>
    <View style={styles.container}>
        <View style={{marginHorizontal:15}}>
            <View style={{height:50,width:200,marginTop:50,marginLeft:60}}>
       <Image style={{height:'100%',width:'100%'}}  source={require('../../assets/Capture.png')}/>
       </View>
       <View style={{marginTop:30}}>
           <Text style={{fontWeight:'bold',fontSize:20}}>Terminate Employee</Text>
       </View>
     
        
            <View>
      <View style={{marginTop:15}}>
      <Text style={{fontSize:18,marginLeft:5}}>Alex Durito</Text> 
      <TextInput style={styles.textinput} placeholder='Last Day of Work'/>
      </View>


     <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
     <TextInput style={{...styles.textinput,width:'45%'}} placeholder='Reg Hrs'/>
     <TextInput style={{...styles.textinput,width:'45%'}} placeholder='Vacation'/>
     </View>

     <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput} placeholder='Tips'/>
      </View>


      <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
     <TextInput style={{...styles.textinput,width:'45%'}} placeholder='Additions'/>
     <TextInput style={{...styles.textinput,width:'45%'}} placeholder='Reductions'/>
     </View>
      
      <View style={{justifyContent:'space-between',alignItems:'center',marginTop:15}}>
      <View style={styles.customButton}>
          <TouchableOpacity onPress={()=>navigation.pop()}>
          <Text style={{color:'white',fontSize:16}}>Submit</Text>
          </TouchableOpacity>
      </View>
      <View style={{marginTop:10}}>
           <Text style={{fontSize:18,color:'gray'}}>OR</Text>
       </View>
      <View style={{...styles.customButton,backgroundColor:'white',marginTop:10,width:280}}>
          <TouchableOpacity onPress={()=>navigation.pop()}>
          <Text style={{color:'black',fontSize:16}}>Submit and Report other Location</Text>
          </TouchableOpacity>
      </View>
  </View>
      </View>
      
      
      </View>
      
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
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
    shadowRadius:5,
    fontSize:18,
    elevation:3,
    paddingLeft:20,
    height: 50, 
    marginTop:5,
    
     borderRadius:24,
     
     backgroundColor:'#ffffff'
  },
  contentContainerStyle:{
      marginHorizontal:10,
      paddingHorizontal:0
  },
  
  customButton:{
    backgroundColor:color.blue,
    alignItems:'center',
    borderRadius:24,
     paddingVertical:14,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:5,
    width:140,
    elevation:3,
  }
});

export default Terminate;