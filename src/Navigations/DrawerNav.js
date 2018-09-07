import {createDrawerNavigator,createStackNavigator} from 'react-navigation'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'

const StackScreen1=createStackNavigator({
    Screen1:{
        screen:Screen1,
        navigationOptions:()=>({
            title:'Screen1',
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'blue'
            }

        })
    } }
)
const StackScreen2=createStackNavigator({
    Screen2:{
        screen:Screen2,
        navigationOptions:()=>({
            title:'Screen2'

        })
    } }
)
const StackScreen3=createStackNavigator({
    Screen3:{
        screen:Screen3,
        navigationOptions:()=>({
            title:'Screen3',
            drawerLockMode:'locked-closed'

        })
    } }
)

export default Drawer=createDrawerNavigator({
    Screen1:{
        screen:StackScreen1,
         
    },
    Screen2:{
        screen:StackScreen2,
         
    },
    Screen3:{
        screen:StackScreen3,
        
         
    }
    },{
        //drawerPosition:"right"
    }
)