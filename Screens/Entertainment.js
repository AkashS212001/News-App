import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Linking,Button } from 'react-native';
import { services } from '../services/services';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner, Box, } from 'native-base';
import moment from 'moment';
export default function EntertainmentScreen() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
      services('entertainment')
        .then(data => {
          setNewsData(data)
        })
        .catch(error => {
          alert(error)
        })
    }, [])
    return (
        <NativeBaseProvider>
        <View>
        
                  
           <FlatList
       data={newsData}
       renderItem={({ item }) => (
        <View style={styles.newsContainer}>
           <Image
             width={550}
             height={250}
             resizeMode={"cover"}
             source={{
               uri: item.urlToImage,
             }}
             alt={"Alternate Text "}
           />
        <Text style = {styles.title}>
         
        {item.title}
          
         </Text>
         <Text>
         {moment(item.publishedAt).format('LLL')}
           </Text>
         <Text style = {styles.newsDescription}>
         
             {item.description}
          
         </Text>
         <Button  title="Click here to read the full article!" 
          onPress={() => Linking.openURL(item.url)} style={styles.url}>
              
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
    
    text: {
      fontSize: 24,
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
    },
    newsContainer: {
      padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        marginTop: 10,
        fontWeight: "600"
    },
    url: {
      color: "red",
      
    }
    })