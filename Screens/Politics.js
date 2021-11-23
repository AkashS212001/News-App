
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Linking, Button} from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner, Box, } from 'native-base';
import moment from 'moment';
import {Pservice} from '../services/Pservice';


export default function PoliticsScreen() {

    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        Pservice("Politics")
          .then(data => {
            setNewsData(data)
          })
          .catch(error => {
            alert(error)
          })
      }, [])

    return(
  
     <NativeBaseProvider>
        <View>
        <FlatList
       data ={newsData}
       renderItem ={({ item }) => (
        <View>                 
        <Text style = {styles.title}>
        {item.name}
        </Text>
        {item.image &&
        <Image style = {styles.Thumbnail}
             width={550}
             height={250}
             resizeMode={"cover"}
             src= {item.image?.thumbnail?.contentUrl}
             
             alt={"Alternate Text "}
           />
            }
         <Text>
          {moment(item.publishedAt).format('LLL')}
          </Text>

         <Text style = {styles.newsDescription}>
          {item.description}         
         </Text>

         <Button  title="Click here to read the full article!" 
          onPress={() => Linking.openURL(item.url)} >             
              {item.url}
           </Button>
         </View>
       )}
       keyExtractor={(item) => item.id}
     />
        </View>
        </NativeBaseProvider>
    )   
    
}
const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
    fontWeight: "600"
},
newsDescription: {
  fontSize: 16,
  marginTop: 10
},

})