import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,TouchableOpacity,FlatList} from 'react-native';
//import { Button  } from 'react-native-elements'
import color from '../../constants/color';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
let SelectedEmpoloy=[];


const SelectEmploy=({navigation,route,props})=> {

const{employ}=route.params;
//console.log(employ);
const{LocationId}=route.params;
const{businId}=route.params;


const[showEmpty,setShowEmpty]=useState(false);
const [active,setactive]=useState(true);
const[employdata,setEmploy]=useState();
const tranformedEmployee=[];
const[length,setLength]=useState(0);

for(const key in employ){
  tranformedEmployee.push({
    id:key,
    firstName:employ[key].firstName,
    lastName:employ[key].lastName,
    street:employ[key].street,
    city:employ[key].city,
    state:employ[key].state,
    zip:employ[key].zip,
    DateBirth:employ[key].DateBirth,
    SSN:employ[key].SSN,
    allownace:employ[key].allownace,
    hourPerWage:employ[key].hourPerWage,
    salaryPerMonth:employ[key].salaryPerMonth,
    paySequence:employ[key].paySequence,
    email:employ[key].email,
    bankName:employ[key].bankName,
    routing:employ[key].routing,
    account:employ[key].account,
    active:employ[key].active,
    color:'#ffffff'

  })
}

if(tranformedEmployee.length>0 && (employdata==null||employdata==undefined||employdata=='')){
  setEmploy(tranformedEmployee);
  //console.log(TotalDelivery);
}

//console.log('outside');

const selectedCard=(item)=>{



  let index = employdata.indexOf(item);
  //const activeIndex = employdata.findIndex((e) => e.active === true);
  const activeIndex=employdata.reduce(function(a, e, i) {
    if (e.active === true)
        a.push(i);
    return a;
}, []); 
        //console.log(activeIndex);
        if(activeIndex.length==0){
         
        item.active=true;        
          item.color='#b8cbeb'
          setEmploy([...employdata])  
          SelectedEmpoloy.push(item);
          setLength(SelectedEmpoloy.length)
        }
  else if (!activeIndex.includes(index)) {
    //employdata[activeIndex].active = false;
    //employdata[activeIndex].color = '#ffffff';
   item.active=true;
   item.color='#b8cbeb'
   setEmploy([...employdata]) 
   SelectedEmpoloy.push(item);
   //console.log(SelectedEmpoloy);
   setLength(SelectedEmpoloy.length)
  }
  else if(activeIndex.includes(index)){

    index++;
    item.active=false;
    item.color='#ffffff';
    setEmploy([...employdata]) 
       SelectedEmpoloy.splice(index-1, index); 
    console.log(SelectedEmpoloy);
    setLength(SelectedEmpoloy.length)

  }


  
  
}

const renderEmployee=({item})=>(
  <View style={{...styles.buisnesscard,backgroundColor:item.color}}>
  {item.active ?
<MaterialCommunityIcons  name='checkbox-marked' type='MaterialCommunityIcons' size={24} color={color.blue} onPress={() => selectedCard(item)} />
:<MaterialCommunityIcons  name='checkbox-blank-outline' type='MaterialCommunityIcons' size={24} color={color.blue} onPress={() =>selectedCard(item)} />}
  <Text style={{marginLeft:20,fontSize:16}}>{`${item.firstName} ${item.lastName}`}</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Terminate')}>
  <Text style={{marginLeft:80,fontSize:16,color:'red'}}>Terminate</Text>
  </TouchableOpacity>
</View>
)
  return (
    <View style={styles.container}>
        <View style={{marginHorizontal:10}}>
            <View style={{height:50,width:200,marginTop:50,marginLeft:60}}>
       <Image style={{height:'100%',width:'100%'}}  source={require('../../assets/Capture.png')}/>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
           <Text style={{fontWeight:'bold',fontSize:18}}>Active Employee</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('AddEmploy',{buisId:businId,LocatId:LocationId})}>
           <Text style={{fontWeight:'bold',fontSize:18,color:color.blue}}>ADD NEW</Text>
           </TouchableOpacity>
  <Text>{length}</Text>
       </View>
      {tranformedEmployee.length==0 ?
       <View style={{alignItems:'center',marginTop:90}}>
           <View style={styles.iconContainer}>
       <Icon  name='persons' type='Ionicons' size={40} color='gray' onPress={() => navigation.toggleDrawer()} />
       
       </View>
       <Text style={{fontSize:18}}>Employee List is Empty</Text>
       <Text style={{color:'gray',marginTop:10}}>You don't have any employee</Text>
       <View style={{flexDirection:'row',marginTop:10}}>
           <Text>Click on</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('AddEmploy',{buisId:businId,LocatId:LocationId})}>
           <Text style={{color:color.blue,marginLeft:5,fontSize:18}}>ADD NEW</Text>
           </TouchableOpacity>
       </View>
  </View>:
     
      
      <FlatList
       data={employdata}
       keyExtractor={item=>item.id}
       renderItem={renderEmployee}
       contentContainerStyle={styles.productList}
     />
      
      }
    
      </View>

      <View style={styles.terminateButton}>
          <TouchableOpacity onPress={()=>navigation.navigate('SelectLocation')}>
          <Text style={{color:'white',fontSize:16}}>{`Terminate (${length})`}</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.customButton}>
          <TouchableOpacity onPress={()=>navigation.navigate('SelectLocation')}>
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
terminateButton:{
  backgroundColor:'red',
  alignItems:'center',
   paddingVertical:14,
   borderRadius:24,
   width:'40%',
   position:'absolute',
   bottom:90,
   left:100

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
    marginTop:20,
    
     borderRadius:8,
     
     
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

export default SelectEmploy;