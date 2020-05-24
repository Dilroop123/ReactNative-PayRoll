import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,TouchableOpacity,FlatList} from 'react-native';
//import { Button  } from 'react-native-elements'
import color from '../../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import * as businessAction from '../../store/actions/businessAction';

const ChooseBuisness=({navigation,route,props})=> {

  const dispatch=useDispatch();
const TotalBuisness=useSelector(state=>state.buisness.BuisnessData)
//console.log(TotalBuisness);

useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
    dispatch(businessAction.fetchBuisness())
    });

     
}, [dispatch]);


const[selectedBuisness,setSelectedBuisness]=useState();

console.log('outside fsfs');

const selectedCard=(item)=>{
 // console.log(item);

 const index = TotalBuisness.indexOf(item);
 const activeIndex = TotalBuisness.findIndex((e) => e.active === true);
      // console.log(activeIndex);
       if(activeIndex==-1){
        item.active=true;
       }
 else if (activeIndex !== index && activeIndex>-1) {
  TotalBuisness[activeIndex].active = false;
  item.active=true;

 }




 //item.active=true;
  setSelectedBuisness(item);
  

}

const Next=()=>{
  navigation.navigate('SelectLocation',{location:selectedBuisness.location,BuisnessId:selectedBuisness.id})
}

const renderBuisness=({item})=>(
  <TouchableOpacity onPress={()=>selectedCard(item)}>
  <View style={styles.buisnesscard}>
  {item.active ?
<Ionicons  name='md-radio-button-on' type='Ionicons' size={24} color={color.blue}  />
:<Ionicons  name='md-radio-button-off' type='Ionicons' size={24} color={color.blue}  />}
  <Text style={{marginLeft:20,fontSize:16}}>{item.name}</Text>
</View>
</TouchableOpacity>
)

  return (
    <View style={styles.container}>
        <View style={{marginHorizontal:10}}>
            <View style={{height:50,width:200,marginTop:50,marginLeft:60}}>
       <Image style={{height:'100%',width:'100%'}}  source={require('../../assets/Capture.png')}/>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
           <Text style={{fontWeight:'bold',fontSize:18}}>Choose a business</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('AddBuisness')}>
           <Text style={{fontWeight:'bold',fontSize:18,color:color.blue}}>ADD NEW</Text>
           </TouchableOpacity>
       </View>
      {TotalBuisness.length==0?
       <View style={{alignItems:'center',marginTop:90}}>
           <View style={styles.iconContainer}>
       <Icon  name='briefcase-remove' type='Ionicons' size={40} color='gray'  />
       
       </View>
       <Text style={{fontSize:18}}>Business List is Empty</Text>
       <Text style={{color:'gray',marginTop:10}}>You don't have any business</Text>
       <View style={{flexDirection:'row',marginTop:10}}>
           <Text>Click on</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('AddBuisness')}>
           <Text style={{color:color.blue,marginLeft:5,fontSize:18}}>ADD NEW</Text>
           </TouchableOpacity>
       </View>
  </View>:


       <FlatList
       data={TotalBuisness}
       keyExtractor={item=>item.id}
       renderItem={renderBuisness}
       contentContainerStyle={styles.productList}
     />
      
      }
    
      </View>
      <View style={styles.customButton}>
          <TouchableOpacity onPress={()=>Next()}>
          <Text style={{color:'white',fontSize:16}}>Next</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa'
  },
  productList:{
    marginVertical:20,
    marginHorizontal:15
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
  buisnesscard:{
   flexDirection:'row',
   alignItems:'center',
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    fontSize:18,
    elevation:3,
    paddingLeft:20,
    height: 60, 
    marginTop:10,
    
     borderRadius:8,
     
     backgroundColor:'#ffffff'
  },
  customButton:{
    backgroundColor:color.blue,
    alignItems:'center',
     paddingVertical:14,
     marginTop:245,
     width:'100%',
     position:'absolute',
     bottom:0
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    elevation:3,
  }
});

export default ChooseBuisness;