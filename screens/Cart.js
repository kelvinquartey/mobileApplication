import React from "react";
import { StyleSheet, Text, View, Image, backgroundColor } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Cart({navigation}){
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>

            <View style={{ flexDirection: 'row', paddingTop: 30, marginLeft: 10}}>
                <TouchableOpacity
                 onPress={() => { 
                    navigation.navigate("Home")
                }}
                >   
                <View style={{alignItems: 'flex-start'}}>            
                    <Ionicons name="md-arrow-back-circle-outline" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <View style={{ flex: 1, marginLeft: -40, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '500'}}>Cart List</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, backgroundColor: "#e3e3e3", borderRadius: 10, margin: 10,paddingBottom: 10}}>
            <View>    
            <Image
                    style={{
                    width: 150,
                    height: 80,
                    paddingTop: 20,
                    borderRadius: 10,
                  }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
            </View>
            <View style={{paddingLeft: 20}}>
                <Text style={{fontSize: 20, paddingTop: 10 }}>Pinarello Bike</Text>
                <Text style={{paddingTop: 20, fontSize: 20, color: 'blue'}}>₵700.00</Text>
            </View>
            <View style={{paddingLeft: 35, paddingTop: 25}}>
            <Ionicons name="add-circle-sharp" size={24} color="red" />
            </View>
                

            </View>

            <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 10, backgroundColor: "#e3e3e3", borderRadius: 10, margin: 10,paddingBottom: 5}}>
            <View>    
            <Image
                    style={{
                    width: 150,
                    height: 80,
                    paddingTop: 20,
                    borderRadius: 10,
                  }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
            </View>
            <View style={{paddingLeft: 20, paddingTop: 5}}>
                <Text style={{fontSize: 20 }}>Brompton Bike</Text>
                <Text style={{paddingTop: 20, fontSize: 20, color: 'blue'}}>₵600.00</Text>
            </View>

            <View style={{paddingLeft: 20, paddingTop: 25}}>
            <Ionicons name="add-circle-sharp" size={24} color="red" />
            </View>
                
             </View>
            <View style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 10, backgroundColor: "#e3e3e3", borderRadius: 10, margin: 10,paddingBottom: 10}}>
            <View>    
            <Image
                    style={{
                    width: 150,
                    height: 80,
                    paddingTop: 20,
                    borderRadius: 10,
                  }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
            </View>
            <View style={{paddingLeft: 20, paddingTop: 5}}>
                <Text style={{fontSize: 20 }}>Shinn Bike</Text>
                <Text style={{paddingTop: 20, fontSize: 20, color: 'blue'}}>₵200.00</Text>
            </View>

            <View style={{paddingLeft: 50, paddingTop: 25}}>
            <Ionicons name="add-circle-sharp" size={24} color="red" />
            </View>
                
        
            </View>
            <View style={{ paddingTop: 10, paddingLeft: 10, backgroundColor: "#e3e3e3", borderRadius: 10, margin: 10,paddingBottom: 10}}>
            <View style={{flexDirection: 'row',alignItems: 'stretch', justifyContent: 'space-evenly', paddingTop: 30}}>
                <Text style={{fontSize: 20}}> Subtotal</Text>
                <Text style={{fontSize: 20}}> ₵1,500.00</Text>
            </View>

            <View style={{flexDirection: 'row',alignItems: 'stretch', justifyContent: 'space-evenly', paddingTop: 5}}>
                <Text style={{fontSize: 20}}> Transportation Cost</Text>
                <Text style={{fontSize: 20}}> ₵100.00</Text>
            </View>

            <View style={{flexDirection: 'row',alignItems: 'stretch', justifyContent: 'space-evenly', paddingTop: 5}}>
                <Text style={{fontSize: 20}}> Total</Text>
                <Text style={{fontSize: 20}}> ₵1,600.00</Text>
            </View>
            </View>

            <View style={{
                flex: "column",
                flexDirection: "row",
                backgroundColor: "black", 
                justifyContent: "space-evenly", 
                borderRadius: 10,
                padding: 5,
                
                marginTop: 35,
                

                
                }}
                >
                 <TouchableOpacity 
                 onPress={() => { 
                navigation.navigate("Home")
                 }}
                >
                <View style={{backgroundColor: "white", padding: 10, borderRadius: 40}}>
                <Ionicons name="home" size={24} color="red" />
                </View>
                </TouchableOpacity>

                <View style={{ padding: 10}}>
                <AntDesign name="shoppingcart" size={24} color="white" />
                </View>
            </View> 


        </View>
    );
}