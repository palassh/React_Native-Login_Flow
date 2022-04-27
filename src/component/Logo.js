import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{width: 150, height: 150,borderRadius:40}}
                    source={require('../Images/Friends-2.jpg')}/>
                <Text style={styles.logoText}>God of War</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
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