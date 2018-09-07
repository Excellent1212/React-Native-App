import {createStackNavigator} from 'react-navigation'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'

export default StackHome=createStackNavigator({
    Screen1:{
        screen:Screen1,
        navigationOptions:()=>({
            title:'Screen1'

        })
    },
    Screen2:{
        screen:Screen2,
        navigationOptions:()=>({
            title:'Screen2'

        })
    },
    Screen3:{
        screen:Screen3,
        navigationOptions:()=>({
            title:'Screen3'

        })
    }
    },{
        initialRouteName:'Screen1'
    }
)