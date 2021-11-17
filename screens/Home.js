import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, FlatList} from "react-native";
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";



export default function Home({navigation}){
    return ( 
<View style={{backgroundColor: "white", flex: 1, paddingTop: 30, paddingHorizontal: 20,}}>
        <ScrollView style={{ flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:"space-between"}}>
            <Ionicons name="ios-menu-outline" size={24} color="black" />
            <FontAwesome name="bicycle" size={24} color="red" />
            <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
            <AntDesign name="search1" size={20} color="black" />
            <Ionicons style={{marginLeft: 20}} name="notifications-outline" size={20} color="black" />
            </View>
        </View>
        
            <Text style={{color: "grey",fontWeight: '500', fontSize: 20}}>
                The World's <Text style={{color: "orange", fontSize: 25}}>Best Bikes!</Text>
            </Text>
            <Text style={{color: "black",paddingTop: 10, fontWeight: 'bold', fontSize: 20}}>Categories</Text>
            
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ 
                    alignItems: 'center',
                    backgroundColor: '#e3e3e3',
                    padding: 10,  
                    borderRadius: 15,
                    marginRight: 15, 
                    width: 50,
                    height: 37}}>
                    <TouchableOpacity><Text style={{fontWeight: '500',color: "orange", fontSize: 17}}>All</Text></TouchableOpacity>
                </View>
                <View style={{ 
                    alignItems: 'center', 
                    justifyContent: 'space-between',  
                    backgroundColor: "#e3e3e3", 
                    padding: 10, 
                    marginRight: 17, 
                    borderRadius: 15,
                    width: 90,
                    height: 37 }}>
                    <TouchableOpacity><Text style={{fontWeight: '500', fontSize: 15}}>Roadbike</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    backgroundColor: "#e3e3e3",  
                    padding: 10, 
                    marginRight: 15,  
                    borderRadius: 15,
                    height: 37,
                    width: 90  }}>
                    <TouchableOpacity><Text style={{fontWeight: '500', fontSize: 15}}>Mountain</Text></TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: "#e3e3e3",
                    padding: 10, 
                    marginRight: 25,  
                    borderRadius: 15,
                    width: 60,
                    height: 37  }}>
                    <TouchableOpacity><Text style={{fontWeight: '500', fontSize: 14}}>Urban</Text></TouchableOpacity>
                </View>
            </View>
            
            <View style={{flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>

            <TouchableOpacity>
                <View style={{alignItems: 'center', backgroundColor: "#e3e3e3", borderRadius: 15, paddingTop: 10, width: 160}}>
                
                <Image
                    style={{
                    width: 158,
                    backgroundColor: "#e3e3e3",
                    height: 150,
                    paddingTop: 10,
                    borderRadius: 10,
                  }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
                    
                    <Text style={{color: "black", fontSize: 20, fontWeight: '100'}}>Pinarello Bike</Text>
                    <Text style={{color: "black", fontSize: 20}}>₵700.00</Text>
                </View></TouchableOpacity>
                <TouchableOpacity>
                <View style={{alignItems: 'center', backgroundColor: "#e3e3e3", borderRadius: 15, paddingTop: 10, width: 160}}>
                <Image
                    style={{
                    width: 158,
                    backgroundColor: "#e3e3e3",
                    height: 150,
                    paddingTop: 10,
                    borderRadius: 10,
                    }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
                    <Text style={{color: "black", fontSize: 20, fontWeight: '100'}}>Brompton Bike</Text>
                    <Text style={{color: "black", fontSize: 20}}>₵600.00</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>
                <TouchableOpacity>
            <View style={{alignItems: 'center', backgroundColor: "#e3e3e3", borderRadius: 15, paddingTop: 10, width: 160}}>
                <ImageBackground style={{backgroundColor: "#e3e3e3"}}>
                <Image
                    style={{
                    width: 158,
                    backgroundColor: "#e3e3e3",
                    height: 150,
                    paddingTop: 10,
                    borderRadius: 10,
                  }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
                    </ImageBackground>
                    <Text style={{color: "black", fontSize: 20, fontWeight: '100'}}>Shinn Bike</Text>
                    <Text style={{color: "black", fontSize: 20}}>₵200.00</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={{alignItems: 'center', backgroundColor: "#e3e3e3", borderRadius: 15, paddingTop: 10, width: 160}}>
                <Image
                    style={{
                    width: 158,
                    backgroundColor: "#e3e3e3",
                    height: 150,
                    paddingTop: 10,
                    borderRadius: 10,
                    }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
                    <Text style={{color: "black", fontSize: 20, fontWeight: '100'}}>Narco Bike</Text>
                    <Text style={{color: "black", fontSize: 20}}>₵600.00</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>

            <TouchableOpacity>
                <View style={{alignItems: 'center', backgroundColor: "#e3e3e3", borderRadius: 15, paddingTop: 10, width: 160}}>
                
                <Image
                    style={{
                    width: 158,
                    backgroundColor: "#e3e3e3",
                    height: 150,
                    paddingTop: 10,
                    borderRadius: 10,
                  }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
                    
                    <Text style={{color: "black", fontSize: 20, fontWeight: '100'}}>Colnago Bike</Text>
                    <Text style={{color: "black", fontSize: 20}}>₵500.00</Text>
                </View></TouchableOpacity>
                <TouchableOpacity>
                <View style={{alignItems: 'center', backgroundColor: "#e3e3e3", borderRadius: 15, paddingTop: 10, width: 160}}>
                <Image
                    style={{
                    width: 158,
                    backgroundColor: "#e3e3e3",
                    height: 150,
                    paddingTop: 10,
                    borderRadius: 10,
                    }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1593091861575-38a632b4f32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'  }}
                    />
                    <Text style={{color: "black", fontSize: 20, fontWeight: '100'}}>Canyon Bike</Text>
                    <Text style={{color: "black", fontSize: 20}}>₵400.00</Text>
                </View>
                </TouchableOpacity>
                
            </View>
            
           
            </ScrollView> 
        
            <View style={{
                flexDirection: "row",
                backgroundColor: "black", 
                justifyContent: "space-evenly", 
                borderRadius: 10,
                padding: 5,
                marginTop: 2,
                

                
                }}
                >
                <View style={{backgroundColor: "black", padding: 10, borderRadius: 40}}>
                <Ionicons name="home" size={24} color="white" />
                </View>

                

                <TouchableOpacity 
           onPress={() => { 
            navigation.navigate("Cart")
        }}
        >
                <View style={{ padding: 10}}>
                <AntDesign name="shoppingcart" size={24} color="red" />
                </View>
                </TouchableOpacity>
            </View> 
        

    
    </View>
    
    
    
    );
}