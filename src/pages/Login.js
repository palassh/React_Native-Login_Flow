import React from 'react';
import { StyleSheet, Text, View,Linking,TextInput,TouchableOpacity,Image } from 'react-native';
// import Logo from '../component/Logo';

export default class Login extends React.Component{

        constructor(props){
          super(props);
      
          this.state = {
            email:"",
            password:"",
            data:[]
          }
        }
        
    render(){
        return(
            <View style={{padding:60,marginTop:100}}>
                <View style={styles.container}>
                <Image style={{width: 150, height: 150,borderRadius:40}}
                    source={require('../Images/Friends-2.jpg')}/>
                <Text style={styles.logoText}>Friends</Text>
                </View>
                <TextInput    
                style={{width: 300, height:40,
                fontSize:16, 
                backgroundColor: '#232F34',
                borderRadius:25,
                paddingHorizontal:15}} 
                onChangeText={(text) => this.setState({email:text})}
                placeholder="Email"
                placeholderTextColor='#ffffff'/>

                <TextInput 
                 style={{width: 300, height:40,
                 fontSize:16, 
                 backgroundColor: '#232F34',
                 marginVertical:20, 
                 borderRadius:25,
                 paddingHorizontal:16}}
                 onChangeText={(text) => this.setState({password:text})}
                 placeholder="Password" secureTextEntry={true} 
                 placeholderTextColor='#ffffff'/>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>


                <View style={{paddingHorizontal:85}}>
                    <Text style={{color:'black',fontSize:15, textDecorationLine:'underline',marginTop:10}} 
                    onPress={() => Linking.openURL('http://google.com')}>Forgot Password?</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    forgotpass:{     
    alignItems: 'center',
    justifyContent:'flex-end',
    height:50,width:150,
    marginVertical:20
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
        height:40,
        borderRadius:25,   
    },
    
    container: {
        justifyContent:'center',
        alignItems:'center'
    },
    logoText: {
        fontSize:30,
        marginVertical: 15,
        color: 'black'
    }
    
});