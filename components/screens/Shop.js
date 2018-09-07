import React from 'react';
import {Image } from 'react-native';
import StackHome from '../navigation/StackNav'
import {createDrawerNavigator,createStackNavigator} from 'react-navigation'
import{  
  Men,
  Women,
  Shoes,
  Kids,
  Furniture,
  Bed,Home
} from '../Drawers'
// const StackHome=createStackNavigator({
//   Home:{
//       screen:Home,

//   } }
// )
const StackMen=createStackNavigator({
  Men:{
      screen:Men,
      // navigationOptions:()=>({
      //     title:'Men',
      //     headerTintColor:'white',
      //     headerStyle:{
      //         backgroundColor:'blue'
      //     }

      // })
  } }
)
const StackWomen=createStackNavigator({
  Women:{
      screen:Women,
  } }
)
const StackKids=createStackNavigator({
  Kids:{
      screen:Kids,
  } }
)
const StackShoes=createStackNavigator({
  Shoes:{
      screen:Shoes,
  } }
)
const StackFurniture=createStackNavigator({
  Furniture:{
      screen:Furniture,
  } }
)
const StackBed=createStackNavigator({
  Bed:{
      screen:Bed,
  } }
)



 const Drawer=createDrawerNavigator({
   Home:{
     screen:StackHome
   },
   Men:{
     screen:StackMen
   },
   Women:{
     screen:StackWomen
   },
   Kids:{
    screen:StackKids,
},
Shoes:{
  screen:StackShoes,
},
Furniture:{
  screen:StackFurniture,
} ,
Bed:{
  screen:StackBed,
}



    
    

    })

export default class Shop extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Shop',
    tabBarIcon: ({tintColor}) => {
        return (
            <Image
                source={require('../../images/icon-home.png')}
                style={{width: 30, height: 30}} />
        
        )
    }
}
  render() {
    return (
       <Drawer />
    );
  }
}

 
 