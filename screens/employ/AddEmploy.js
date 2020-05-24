import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button,ScrollView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
//import { Button  } from 'react-native-elements'
import color from '../../constants/color';
import { useSelector,useDispatch } from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ModalSelector from 'react-native-modal-selector'
import * as buisnessAction from '../../store/actions/businessAction';


const AddEmploy=({navigation,route,props})=> {

    const dispatch=useDispatch();
    

    const {buisId}=route.params;
    const{LocatId}=route.params;
    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();
    const[street,setStreet]=useState();
    const[city,setCity]=useState();
    const[state,setState]=useState();
    const[zip,setZip]=useState();
    const[DateBirth,setDateBirth]=useState();
    const[SSN,setSSN]=useState();
    const[allownace,setAllownace]=useState();
    const[hourPerWage,setHourPerWage]=useState();
    const[salaryPerMonth,setSalaryPerMonth]=useState();
    const[textInputValue,setTextinputValue]=useState();
    const[email,setEmail]=useState();
    const[bankName,setBankName]=useState();
    const[routing,setRouting]=useState();
    const[account,SetAccount]=useState();

    let data = [
      { key: 0,label: 'Weekly' },
      { key: 1, label: 'Bi-Weekly' },
      { key: 2, label: 'Monthly' },
      { key: 3, label: 'Semi-Monthly' },
      { key: 4, label: 'Quarterly' },
      { key: 5, label: 'Annualy' }
    ];

    const saveEmploy=()=>{

dispatch(buisnessAction.AddEmployee(buisId,LocatId,firstName,lastName,street,city,state,zip,DateBirth,SSN,allownace,hourPerWage,salaryPerMonth,textInputValue,email,bankName,routing,account))
navigation.pop();   
}

  return (
    <KeyboardAvoidingView
    style={{ flex:1}}
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
           <Text style={{fontWeight:'bold',fontSize:20}}>Add new employee</Text>
       </View>
     
        
            <View>
      <View style={{marginTop:15}}>
      <Text style={{fontSize:18,marginLeft:5}}>Business Name</Text> 
      <TextInput style={styles.textinput} value={firstName} onChangeText={value=>setFirstName(value)} placeholder='First Name'/>
      </View>

      <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput}  value={lastName} onChangeText={value=>setLastName(value)} placeholder='Last Name'/>
      </View>

      <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput} value={street} onChangeText={value=>setStreet(value)} placeholder='Street'/>
      </View>

     <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
     <TextInput style={{...styles.textinput,width:'45%'}}  value={city} onChangeText={value=>setCity(value)} placeholder='City'/>
     <TextInput style={{...styles.textinput,width:'45%'}}  value={state} onChangeText={value=>setState(value)} placeholder='State'/>
     </View>

     <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
     <TextInput style={{...styles.textinput,width:'45%'}} value={zip} onChangeText={value=>setZip(value)} placeholder='Zip'/>
     <TextInput style={{...styles.textinput,width:'45%'}} value={DateBirth} onChangeText={value=>setDateBirth(value)} placeholder='Date of birth'/>
     </View>

     <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
     <TextInput style={{...styles.textinput,width:'45%'}}  value={SSN} onChangeText={value=>setSSN(value)} placeholder='SSN'/>
     <TextInput style={{...styles.textinput,width:'45%'}} value={allownace} onChangeText={value=>setAllownace(value)} placeholder='Allowances'/>
     </View>

     <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput}  value={hourPerWage} onChangeText={value=>setHourPerWage(value)} placeholder='H/Wage'/>
      </View>

      <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput} value={salaryPerMonth} onChangeText={value=>setSalaryPerMonth(value)} placeholder='Salary/Month'/>
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
                        style={{...styles.textinput,marginTop:12}}
                        editable={false}
                        placeholder="Pay sequence"
                        value={textInputValue} />

                </ModalSelector>


                <View style={{marginTop:30}}>
           <Text style={{fontWeight:'bold',fontSize:20}}>Direct Deposit Info</Text>
       </View>

       <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput} value={email} setEmail={value=>setEmail(value)} placeholder='Email ID'/>
      </View>

      <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput} value={bankName} onChangeText={value=>setBankName(value)} placeholder='Bank Name'/>
      </View>

      <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput}  value={routing} onChangeText={value=>setRouting(value)} placeholder='Routing #'/>
      </View>

      <View style={{marginTop:10}}> 
      <TextInput style={styles.textinput} value={account} onChangeText={value=>SetAccount(value)} placeholder='Account #'/>
      </View>
      
      <View style={{justifyContent:'space-between',alignItems:'center',marginTop:15}}>
      <View style={styles.customButton}>
          <TouchableOpacity onPress={()=>saveEmploy()}>
          <Text style={{color:'white',fontSize:16}}>Save</Text>
          </TouchableOpacity>
      </View>
      <View style={{marginTop:10}}>
           <Text style={{fontSize:18,color:'gray'}}>OR</Text>
       </View>
      <View style={{...styles.customButton,backgroundColor:'white',marginTop:10,width:200}}>
          <TouchableOpacity onPress={()=>navigation.pop()}>
          <Text style={{color:'black',fontSize:16}}>Save & Report Payroll</Text>
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

export default AddEmploy;