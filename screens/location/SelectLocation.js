import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,TouchableOpacity,FlatList,Switch} from 'react-native';
//import { Button  } from 'react-native-elements'
import color from '../../constants/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {Picker} from '@react-native-community/picker';
import ModalSelector from 'react-native-modal-selector'


const SelectLocation=({navigation,route,props})=> {

  const {location}=route.params;
  //console.log(location);
  const{BuisnessId}=route.params;
const[showEmpty,setShowEmpty]=useState(false);
const [active,setactive]=useState(true);
const[buisnessCard,setBuisnessCard]=useState(true);
const[reminder,setReminder]=useState(false);
const[textInputValue,setTextinputValue]=useState();
const[locationdata,SetLocation]=useState();


const tranformedLocation=[];
for(const key in location){
  tranformedLocation.push({
    id:key,
    name:location[key].name,
    active:location[key].active,
    employee:location[key].Employee,
    color:'#ffffff'
  })
}


if(tranformedLocation.length>0 && (locationdata==null||locationdata==undefined||locationdata=='')){
  SetLocation(tranformedLocation);
  //console.log(TotalDelivery);
}

//console.log(tranformedLocation);
let data = [
  { key: 0,label: 'Weekly' },
  { key: 1, label: 'Bi-Weekly' },
  { key: 2, label: 'Monthly' },
  { key: 3, label: 'Semi-Monthly' },
  { key: 4, label: 'Quarterly' },
  { key: 5, label: 'Annualy' }
];

const[selectedBuisness,setSelectedBuisness]=useState();

const selectedCard=(item)=>{
const index = locationdata.indexOf(item);
  const activeIndex = locationdata.findIndex((e) => e.active === true);
       // console.log(activeIndex);
        if(activeIndex==-1){
         
        item.active=true;        
          item.color='#b8cbeb'
        }
  else if (activeIndex !== index && activeIndex>-1) {
    locationdata[activeIndex].active = false;
    locationdata[activeIndex].color = '#ffffff';
   item.active=true;
   item.color='#b8cbeb'
 
  }
  setSelectedBuisness(item);
  
}

const Next=()=>{
  navigation.navigate('SelectEmploy',{employ:selectedBuisness.employee,LocationId:selectedBuisness.id,businId:BuisnessId})
}

const renderLocation=({item})=>(
  <View style={{...styles.buisnesscard,backgroundColor:item.color}}>
         <View style={{flexDirection:'row',marginTop:20}}>
          {item.active ?
      <Ionicons  name='md-radio-button-on' type='Ionicons' size={24} color={color.blue} onPress={() => selectedCard(item)} />
       :<Ionicons  name='md-radio-button-off' type='Ionicons' size={24} color={color.blue} onPress={() => selectedCard(item)} />}
          <Text style={{marginLeft:20,fontSize:16,fontWeight:'bold'}}>{item.name}</Text>
          </View>
          <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={['portrait','landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ setTextinputValue(option.label)}}>

                    <TextInput
                        style={styles.textinput}
                        editable={false}
                        placeholder="Pay sequence"
                        value={textInputValue} />

                </ModalSelector>
    

    <View style={{flexDirection:'row'}}>

    <TextInput style={styles.textInputLastPay} editable={true} placeholder="Last Payroll"  />
    <TextInput style={styles.textInputLastPay} editable={true} placeholder="Last Payroll"  />
                   

      </View>

      <View style={styles.filterContainer}>
      <Text style={{fontSize:18}}>Reminder</Text>
      <Switch
        trackColor={{ true: color.blue}}

        value={reminder}
        onValueChange={value=>setReminder(value)}
      />
    </View>
      </View>
)


  return (
    <View style={styles.container}>
        <View style={{marginHorizontal:10}}>
            <View style={{height:50,width:200,marginTop:50,marginLeft:60}}>
       <Image style={{height:'100%',width:'100%'}}  source={require('../../assets/Capture.png')}/>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:34}}>
           <Text style={{fontWeight:'bold',fontSize:18}}>Select Location</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('AddLocation',{BuisId:BuisnessId})}>
           <Text style={{fontWeight:'bold',fontSize:18,color:color.blue}}>ADD NEW</Text>
           </TouchableOpacity>
       </View>
      {tranformedLocation.length==0||tranformedLocation.length==undefined?
       <View style={{alignItems:'center',marginTop:90}}>
           <View style={styles.iconContainer}>
       <Icon  name='location-off' type='Ionicons' size={40} color='gray' onPress={() => navigation.toggleDrawer()} />
       
       </View>
       <Text style={{fontSize:18}}>Location List is Empty</Text>
       <Text style={{color:'gray',marginTop:10}}>You don't have any Location</Text>
       <View style={{flexDirection:'row',marginTop:10}}>
           <Text>Click on</Text>
           <TouchableOpacity onPress={()=>navigation.navigate('AddLocation',{BuisId:BuisnessId})}>
           <Text style={{color:color.blue,marginLeft:5,fontSize:18}}>ADD NEW</Text>
           </TouchableOpacity>
       </View>
  </View>:
      
      
      <FlatList
       data={locationdata}
       keyExtractor={item=>item.id}
       renderItem={renderLocation}
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    marginLeft:35,
    marginVertical: 15
  },
  productList:{
    marginVertical:5,
    marginHorizontal:15
  },
  textinput:{
    fontSize:16,
    marginHorizontal:35,
    paddingLeft:20,
    height: 50, 
    marginTop:5,
    borderWidth:1,
    borderColor:'skyblue',
     borderRadius:10,
     
     backgroundColor:'#ffffff'
  },
  textInputLastPay:{
    fontSize:16,
    paddingLeft:3,
    width:'33%',
    height: 50, 
    marginTop:5,
    marginLeft:35,
    borderWidth:1,
    borderColor:'skyblue',
     borderRadius:10,
     
     backgroundColor:'#ffffff'
  }
  ,
  buisnesscard:{
   
   
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:10,
    fontSize:18,
    elevation:3,
    paddingLeft:20,
   
    marginTop:10,
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

export default SelectLocation;