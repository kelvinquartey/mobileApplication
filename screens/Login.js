import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";


export default function Login(){
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image 
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                    marginBottom:20,
                }}
                source={{
                    uri: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3NpYyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" 
                }}
                />
            <Text style={{color: "ash", fontSize: 24}}> Welcome to</Text>
            <Text style={{color: "black", fontSize: 30, fontWeight: '600'}}> Sneaker Shop</Text>
           <TouchableOpacity 
           style={{ 
               backgroundColor: "#e3e3e3",
               padding: 10, 
               paddingHorizontal: 50, 
               marginTop: 10 ,
               borderRadius: 5,
               }}>
            
            <Text style={{ fontSize: 20 }}>Login with Gmail</Text>
           
           </TouchableOpacity>
           <TouchableOpacity 
           style={{ 
               backgroundColor: "black",
               padding: 10, 
               paddingHorizontal: 50, 
               marginTop: 10 ,
               borderRadius: 5,
               }}>
            <Text style={{ fontSize: 20, color: "white"  }}>Login with Apple</Text>
           
           </TouchableOpacity>
            
        </View>
    );
}