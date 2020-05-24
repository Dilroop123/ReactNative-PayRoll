import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import buisnessReducer from './store/reducers/businessReducer';

const rootReducer = combineReducers({
  buisness:buisnessReducer,
 
  });
  
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <NavigationContainer>
       <Provider store={store}><MyStack/></Provider>
    </NavigationContainer>
  );
}


