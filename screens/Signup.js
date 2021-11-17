import React, {Component} from "react";
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { render } from "react-dom";
import { TextInput } from "react-native-gesture-handler";

const {width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
    },
    inputContainer: {
        marginVertical: 10,
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        width: width / 1.3,
        borderWidth: 2,
        fontSize: 20,
        
    }

})

export default class Signup extends Component{
    state = {
        name: "",
    };

    handleText = (text) => {
        this.setState({ name: text});
    };

render(){
    return(
        <View style={styles.container}>

            <View style={{paddingTop: 40, alignContent: 'center', alignItems: 'center'}}><FontAwesome name="bicycle" size={70} color="red" /></View>   
                <Ionicons name="arrow-back-outline" size={24} color="black" />

                <Text style={{color: "black", fontSize: 30, fontWeight: 'bold', alignItems: 'center'}}>Power Bike Shop</Text>
                <Text style={{color: "black", fontSize: 30, fontWeight: '500', alignItems: 'center', paddingTop: 30}}>Create Account</Text>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 20}}>Name</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 20}}>Email</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 20}}>Password</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{fontSize: 20}}>Confirm Password</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={{
                backgroundColor: "red",
                padding: 20, 
                paddingHorizontal: 50,
                flexDirection: "row",
                alignItems: 'center',
                marginTop: 10 ,
                borderRadius: 10,
            }}>
                <Text style={{color: "black",fontSize: 20, marginLeft: 15, fontWeight: '500'}}>Register</Text>
            </View>
            

           

    </View>
    );
    
}

}
     