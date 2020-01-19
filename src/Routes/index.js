
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../Views/Home';
import Detail from '../Views/ProductDetail'
import Header from  '../Components/Header'



const AppNavigator = createStackNavigator(
    {  
      Home:Home,
      Detail:Detail
    },{
      defaultNavigationOptions: {
        header:props=><Header {...props}></Header>
        
      }
    }
    
  
  );

const AppContainer = createAppContainer(AppNavigator);

export default class Routes extends React.Component {
  render() {
    return (
    <AppContainer />
    );
  }
}