import {createStackNavigator} from 'react-navigation'
import{  
    Men,
    Women,
    Shoes,
    Kids,
    Home,
    Header,
    Search,
    Contact,
    Bed,
    Furniture,
    Contactus,
    Sephora,
    Saloon
} from '../Drawers'

export default StackHome=createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:()=>({
            title:'Home'

        })
    },
    Men:{
        screen:Men,
        navigationOptions:()=>({
            title:'Men'

        })
    },
    Women:{
        screen:Women,
        navigationOptions:()=>({
            title:'Women'

        })
    },
    
    Kids:{
        screen:Kids,
        navigationOptions:()=>({
            title:'Kids'

        })
    },
    Shoes:{
        screen:Shoes,
        navigationOptions:()=>({
            title:'Shoes'

        })
    },
    Search:{
        screen:Search,
        navigationOptions:()=>({
            title:'Search'

        })
    },
    Contact:{
        screen:Contact,
        navigationOptions:()=>({
            title:'Contact'

        })
    },
    Bed:{
        screen:Bed,
        navigationOptions:()=>({
            title:'Bed'

        })
    },
    Furniture:{
        screen:Furniture,
        navigationOptions:()=>({
            title:'Furniture'

        })
    },
    ContactUs:{
        screen:Contactus,
        navigationOptions:()=>({
            title:'Contact Us'

        })
    },
    Sephora:{
        screen:Sephora,
        navigationOptions:()=>({
            title:'Sephora'

        })
    },
    Saloon:{
        screen:Saloon,
        navigationOptions:()=>({
            title:'In Style Saloon'

        })
    },
    },{
        initialRouteName:'Home'
    }
)
