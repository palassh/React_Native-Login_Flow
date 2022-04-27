import React from 'react';
import { StyleSheet,Text, View,TextInput,TouchableOpacity, alert } from 'react-native';
import Login from '../pages/Login';

class Form extends React.Component{  
  constructor(props){
    super(props)

    this.state = {
      email:"",
      password:"",
    }
  }


validate_field =()=>{

  const {email,password} = this.state
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false ){
      //alert("Please enter valid Email Id")
    }else if (password === ""){
      //alert("Please enter Password")
      return false
    }
    return true
}

making_api_call =()=>{
  if(this.validate_field(true)){
    //alert("Successful Login")
  }
}

    render(){
        return(
            <View>
              <Login/>
                <TextInput    
                style={{width: 300,
                fontSize:16, 
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius:25,
                paddingHorizontal:16}} 
                onChangeText={(text) => this.setState({email:text})}
                placeholder="Email"
                placeholderTextColor='#ffffff'/>

                <TextInput 
                 style={{width: 300,
                 fontSize:16, 
                 backgroundColor: 'rgba(255,255,255,0.3)',
                 marginBottom:10, 
                 marginVertical:30, 
                 borderRadius:25,
                 paddingHorizontal:16}}
                 onChangeText={(text) => this.setState({password:text})}
                 placeholder="Password" secureTextEntry={true} 
                 placeholderTextColor='#ffffff'/>

                <TouchableOpacity onPress={()=>this.making_api_call} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:16,
        color:'#ffffff',
        fontWeight:"500",
        margin:10,
        textAlign:'center'        
    },
    button:{
        backgroundColor: '#232F34',
        width:300,
        height:45,
        marginBottom:0,
        borderRadius:25,
        marginVertical:20   
        
    }
    
});
export default Form;