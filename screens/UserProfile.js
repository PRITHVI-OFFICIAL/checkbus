import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Alert,Image} from 'react-native';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';

const UserProfile = () => {
  const navigation = useNavigation();
 const [modalVisible, setModalVisible] = useState(true);
  //const [modalVisible, setmodalVisible] = useState(false);
   
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'UTI bank', value: 'UTI bank'},
        {label: 'Sadharsivam Nagar', value: 'Sadharsivam Nagar'},
        {label: 'Kaiveli', value: 'Kaiveli'},
        {label: 'Ram Nagar', value: 'Ram Nagar'}
       
      ]);

    return (
      <View style={styles.container}>

        <Text style={{fontSize:20,fontWeight:"bold"}}>UserProfile</Text>
        <View style={{  borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth,marginTop:10}}/>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("BookedTicket")}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18,textAlign:"center"}}> Ticket Booked</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18,textAlign:"center"}}> Booking History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18,textAlign:"center"}}> Link Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18,textAlign:"center"}}> Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("Login")}>
  
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18,textAlign:"center"}}> Logout</Text>
        </TouchableOpacity>

        
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({

  container:{
    flex:1, 
    marginTop:50,
    padding:20,

  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor:"#84c8cd",
    marginTop:60

  },

  button1: {
    borderRadius: 10,
    padding: 10,
    backgroundColor:"red",
    marginTop:60,
    width:"50%", 
    alignSelf:"center"

  },





    // container: {
    //   flex: 1,
    //   margin:15
    //   //backgroundColor:"white"
    // },
    // centeredView: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     //marginTop: ,
    //   },
    // modalView: {
    //    // marginTop: "10%",
    //     width:"90%",
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     padding: 10,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     // shadowOffset: {
    //     //   width: 0,
    //     //   height: 2,
    //     // },
    //     // shadowOpacity: 0.25,
    //     // shadowRadius: 4,
    //     elevation: 20,
    //   },
    //   button: {
    //     borderRadius: 10,
    //     padding: 10,
    //     elevation: 2,
    //   },
    //   buttonOpen: {
    //     backgroundColor: '#F194FF',
    //   },
    //   buttonClose: {
    //     backgroundColor: '#2196F3',
    //   },
    //   textStyle: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //   },
    //   modalText: {
    //     marginBottom: 15,
    //     textAlign: 'center',
    //   },


  
  });

  export default UserProfile;

     {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{fontWeight:"bold",fontSize:25,color:"black"}}>V-51 Kovilambakkam</Text>

          <View style={{  borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth,marginTop:10}}/>

          <View style={{marginTop:20,marginBottom:30}}>
                <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
          </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Book</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
        