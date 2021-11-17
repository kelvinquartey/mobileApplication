import React from 'react';
import { View, Text, Image,TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';




export default function Login({navigation}){
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image 
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 30,
                    marginBottom:50,
                    transform: [{rotate: '75degrees'}]
                }}
                source={{
                    uri: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" 
                }}
                />
            <Text style={{color: "grey", fontSize: 24}}> Welcome to</Text>
            <Text style={{color: "black", fontSize: 30, fontWeight: '600'}}>Power Bike Shop </Text>
           <TouchableOpacity 
           onPress={() => { 
            navigation.navigate("Home")
        }}
           style={{ 
               backgroundColor: "#e3e3e3",
               padding: 10, 
               paddingHorizontal: 50,
               flexDirection: "row",
               alignItems: 'center',
               marginTop: 10 ,
               borderRadius: 10,
               }}>
                 <AntDesign name="google" size={24} color="rgb(256, 100, 10)" />  
            
            <Text style={{ fontSize: 20, marginLeft: 15 }}>Login with Gmail</Text>
           
           </TouchableOpacity>
           <TouchableOpacity 
            onPress={() => { 
                navigation.navigate("Home")
            }}
           style={{ 
               backgroundColor: "black",
               padding: 10, 
               flexDirection: "row",
               paddingHorizontal: 50,
               alignItems: 'center', 
               marginTop: 10,
               borderRadius: 10,
               }}>
                   <AntDesign name="apple1" size={24} color="white" />
             <Text style={{ fontSize: 20, color: "white", marginLeft: 15  }}>Login with Apple</Text>
           </TouchableOpacity>
           <TouchableOpacity 
            onPress={() => { 
                navigation.navigate("Signup")
            }}
           style={{
               padding: 10, 
               flexDirection: "row",
               paddingHorizontal: 50,
               alignItems: 'center',
               borderRadius: 10,
               }}>
           <Text style={{marginTop: 10,fontWeight: '500', color: "grey" }}>Not a member?{" "}
           
            <Text style={{color: "orange", fontWeight: 'bold'}}>Signup</Text></Text> 
           </TouchableOpacity>
          
        </View>
    );
}