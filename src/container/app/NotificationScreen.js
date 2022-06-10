
import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {vh, vw} from '../../constaint/index';
import RedLongButton from '../../component/RedLongButton';


const NotificationDefaults = (props)=> {


  const [data, setData]=useState( {data:[
              {id:1, image: require("../../assets/notidoc.png"), name:"March SoulLaComa", text:"with longer scheduled doctor visits", attachment: require("../../assets/vertical.png")},
              {id:2, image: require("../../assets/notidoc.png"), name:"John DoeLink",     text:"Patients benefiting", attachment: require("../../assets/vertical.png")},
              {id:3, image: require("../../assets/notidoc.png"), name:"Finn DoRemiFaso",  text:"with longer scheduled doctor visits",attachment: require("../../assets/vertical.png")},
              {id:4, image: require("../../assets/notidoc.png"), name:"Maria More More",  text:"Lorem ipsum dolor sit amet, with longer scheduled doctor visits.", attachment: require("../../assets/vertical.png")},
              {id:5, image: require("../../assets/notidoc.png"), name:"Frank Odalthh",    text:"with longer scheduled doctor visits.", attachment: require("../../assets/vertical.png")},
              {id:6, image: require("../../assets/notidoc.png"), name:"Clark June Boom!", text:"with longer scheduled doctor visits.", attachment: require("../../assets/vertical.png")},
              {id:7, image: require("../../assets/notidoc.png"), name:"The googler",      text:"with longer scheduled doctor visits Aenean commodo ligula eget dolor.", attachment: require("../../assets/vertical.png")},
              {id:8, image: require("../../assets/notidoc.png"), name:"The googler",      text:"with longer scheduled doctor visits Aenean commodo ligula eget dolor.", attachment: require("../../assets/vertical.png")},
              {id:9, image: require("../../assets/notidoc.png"), name:"The googler",      text:"with longer scheduled doctor visits Aenean commodo ligula eget dolor.", attachment: require("../../assets/vertical.png")},
            ]})
   
      return (
        
        <SafeAreaView style={{flex:1}}>
                    <View style={{flexDirection:"row",height:70}}>
                      
                  <View>
                      {/* <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={{ margin: 10}}>
                          <MaterialCommunityIcons
                              name="arrow-left-box"
                              size={35}
                              color="red"
                          />
                      </TouchableOpacity> */}
                  </View>
                  <View style={{backgroundColor:"white",width:"100%"}}>
                      <Text style={{ textAlign: "center", fontSize: 30, color: "black", fontWeight: "bold", marginTop: vh * 0.02,width:vw*0.7 }}> Notifications</Text>
                  </View>
                  
              </View>
        <FlatList
        contentContainerStyle={{paddingBottom:70}}
          style={styles.root}
          data={data.data}
          extraData={data}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          keyExtractor={(item)=>{
            return item.id;
          }}
          ListFooterComponent={
            <View style={{width:"90%",marginHorizontal: vw * 0.05,marginTop:vh * 0.02}}> 
          <RedLongButton buttonText="View All Notifications"/>
            </View>
          }
          renderItem={(item) => {
            const Notification = item.item;
            let attachment = <View/>;
  
            let mainContentStyle;
            if(Notification.attachment) {
              mainContentStyle = styles.mainContent;
              attachment = <Image style={styles.attachment} source={Notification.attachment}/>
            }
            return(
              
              <View style={styles.container}>
                <Image source={Notification.image} style={styles.avatar}/>
                <View style={styles.content}>
                  <View style={mainContentStyle}>
                    <View style={styles.text}>
                      {/* <Text style={styles.name}>{Notification.name}</Text> */}
                      <Text>{Notification.text}</Text>
                    </View>
                    <Text style={styles.timeAgo}>
                      2 hours ago
                    </Text>
                  </View>
                  
                  {attachment}
                </View>
                
              </View>

            
            );
           
          }}/>

         
          </SafeAreaView>
      )
    
      }
  
      export default NotificationDefaults
  
  const styles = StyleSheet.create({
    root: {
      backgroundColor: "#F3F5F6"
    },
    container: {
      padding:16,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: "#FFFFFF",
      alignItems: "center"
      
      
    },
    avatar: {
      width:50,
      height:50,
      borderRadius:25,
      
    },
    text: {
      marginBottom: 5,
      flexDirection: 'row',
      flexWrap:'wrap',
      color:"black"
      
     

    },
    content: {
      flex: 1,
      marginLeft: 16,
      marginRight: 0,
      color:"black"
    },
    mainContent: {
      marginRight: 60,
      color:"black"
    },
    img: {
      height: 50,
      width: 50,
      margin: 0
    },
    attachment: {
      position: 'absolute',
      right: 0,
      top:10,
      color:"black"
    
    },
    separator: {
      height: 13,
      backgroundColor: "white",
      color:"black"
    },
    timeAgo:{
      fontSize:12,
      color:"black"
      
    },
    name:{
      fontSize:16,
      color:"#1E90FF",
      color:"black"
      
    }
  });