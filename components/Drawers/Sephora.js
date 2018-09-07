import React from 'react';
import moment from 'moment'
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';

const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ]
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ]
export default class Sephora extends React.Component {
    state={
        credentials:{
          name:'',
          Address:'',
          Phone:''
        }
      }
      
      updateText(text,field){
       let newCredentials=Object.assign(this.state.credentials)
       newCredentials[field]=text
       this.setState({
         credentials:newCredentials
       })
      }
     
      schedule=()=>{
         alert(`Thankyou ${this.state.credentials.name} for your time`)
         this.setState({
            credentials:{
                name:'',
                Address:'',
                Phone:''
            }
            


         })
         this.props.navigation.navigate('Home')
      }

render() {
    return (
      <View style={{flex:1,alignItems:'center',marginTop:20}}>
          <Text style={{fontWeight:'bold',fontSize:24,color:'red'}}>Welcome to Sephora</Text>
          <Text style={{fontWeight:'bold',fontSize:24,color:'red'}}>Make an Appointment Today</Text>
          <TextInput 
      style={styles.input} 
        value={this.state.credentials.name}
        placeholder='Enter your name'
        autoCorrect={false}
        onChangeText={text=>this.updateText(text,'name')}
        />
        <TextInput 
      style={styles.input} 
        value={this.state.credentials.address}
        placeholder='address'
        autoCorrect={false}
        onChangeText={text=>this.updateText(text,'address')}
        />
         <TextInput 
      style={styles.input} 
        value={this.state.credentials.phone}
        placeholder='Enter Phone Number'
        autoCorrect={false}
        onChangeText={text=>this.updateText(text,'phone')}
        />
      <Button title='Schedule' onPress={this.schedule}/>
       

      </View>
    );
  }
}
const styles=StyleSheet.create({
    input:{
          height:30,
          width:300,
          marginTop:20,
          backgroundColor:'rgb(209, 201, 200)',
          marginBottom:10
          },
  
  })