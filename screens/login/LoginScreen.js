import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,TouchableOpacity} from 'react-native';
//import { Button  } from 'react-native-elements'
import color from '../../constants/color';
const LoginScreen=({navigation,route,props})=> {
  return (
    <View style={styles.container}>
        <View style={{marginHorizontal:25}}>
            <View style={{height:50,width:200,marginTop:50,marginLeft:60}}>
       <Image style={{height:'100%',width:'100%'}}  source={require('../../assets/Capture.png')}/>
       </View>
       <View style={{alignItems:'center',marginTop:40}}>
           <Text style={{fontWeight:'bold',fontSize:20}}>Login</Text>
       </View>
      <View style={{marginTop:30}}>
      <Text style={{fontSize:18,marginLeft:5}}>Username</Text> 
      <TextInput style={styles.textinput} placeholder='Username'/>
      </View>
      <View style={{marginTop:15}}>
      <Text style={{fontSize:18,marginLeft:5}}>Password</Text> 
      <TextInput style={styles.textinput} placeholder='password'/>
      </View>
      <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
       <Text style={{color:color.blue,fontSize:16}}>Forget Username</Text>
       <Text style={{color:color.blue,fontSize:16}}>Forget Password</Text>
      </View>
      
      <View style={styles.customButton}>
          <TouchableOpacity onPress={()=>navigation.navigate('ChooseBuisness')}>
          <Text style={{color:'white',fontSize:16}}>Territorial</Text>
          </TouchableOpacity>
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
    marginTop:30,
    borderRadius:20,
    marginHorizontal:80,
     paddingVertical:10,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    elevation:3,
  }
});

export default LoginScreen;