import Buisness from '../../models/buisness';
export const ADD_BUISNESS='ADD_BUISNESS';
export const SET_BUISNESS='SET_BUISNESS';

export const AddBusiness = ( name,email) => {
    return async dispatch => {
        // any async code you want!
      
        const response = await fetch('https://payroll-2589b.firebaseio.com/Business.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            active:false
            
          })
        });
    
        const resData = await response.json();
        //console.log(resData);
    
        dispatch({
          type: ADD_BUISNESS,
          tripData: {
            id: resData.name
           
          }
        });
      };
  };


  export const AddLocation = ( buisnessId,location) => {
    return async dispatch => {
        // any async code you want!
      
        const response = await fetch(`https://payroll-2589b.firebaseio.com/Business/${buisnessId}/Location.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:location,
            active:false
            
          })
        });
    
        const resData = await response.json();
        //console.log(resData);
    
        dispatch({
          type: ADD_BUISNESS,
          tripData: {
            id: resData.name
           
          }
        });
      };
  };


  export const AddEmployee = (buisnessId,LocationId,firstName,lastName,street,city,state,zip,DateBirth,SSN,allownace,hourPerWage,salaryPerMonth,paySequence,email,bankName,routing,account) => {
    return async dispatch => {
        // any async code you want!
      
        const response = await fetch(`https://payroll-2589b.firebaseio.com/Business/${buisnessId}/Location/${LocationId}/Employee.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
            DateBirth,
            SSN,
            allownace,
            hourPerWage,
            salaryPerMonth,
            paySequence,
            email,
            bankName,
            routing,
            account,
            active:false
            
          })
        });
    
        const resData = await response.json();
        //console.log(resData);
    
        dispatch({
          type: ADD_BUISNESS,
          tripData: {
            id: resData.firstName
           
          }
        });
      };
  };


  export const fetchBuisness = () => {
    
  return async dispatch => {
    // any async code you want! 'https://drivermap-5b994.firebaseio.com/DriverApp/DriverDetails.json'
    // 
    const response = await fetch('https://payroll-2589b.firebaseio.com/Business.json');

    const resData = await response.json();
   
  
    const loadedDlivery = [];
    
      for (const key in resData) {
     
          loadedDlivery.push(
              new Buisness(
                key,
                resData[key].active,
                resData[key].name,
                resData[key].email,
                resData[key].Location
              )
            );
     }
         

  dispatch({ type: SET_BUISNESS, buisdata: loadedDlivery });
  }};