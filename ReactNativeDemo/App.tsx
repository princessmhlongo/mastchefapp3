import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.ViewStyle}>
      
      <Text style={styles.headingText}>My Hobbies</Text>
     
      <Text style={styles.subheadingText}>1.Football</Text>
      <Text style={styles.secondsubheadingText}>2.Reading</Text> 
      <Text style={styles.thirdsubheadingText}>3.Cooking</Text>
      <Text style={styles.fourthsubheadingText}>4.Music and Singing</Text>
      <Text style={styles.fifthsubheadingText}>5.Watching movies</Text>
      <Text style={styles.sixthsubheadingText}>6.Sleeping</Text>
      <Text style={styles.seventhsubheadingText}>7.Taking pictures</Text>

      <View style={styles.childView}></View>
      <TextInput style={styles.TextInput}



    </View>
    
  );
}



const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    backgroundColor: '#CECECE',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  headingText: { 
    fontSize: 40, 
    color: "black",
    fontWeight: "bold"
  },
  childView:{
    marginVertical:10,
    backgroundColor:"gray",
    padding: 22,
    borderRadius:10
  },
  TextInput: {
    height:40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
  subheadingText:{
    fontSize: 40,
    color: "black", 
    fontWeight: "normal",
 
  },
  secondsubheadingText: {
    fontSize: 40, 
    color: "black",
    fontWeight: "normal",
  },
  thirdsubheadingText: {
    fontSize: 40,
    color: "black",
    fontWeight: "normal",
  },
fourthsubheadingText: { 
  fontSize: 40,
  color: "black",
  fontWeight: "normal",
},
fifthsubheadingText: {
  fontSize: 40 ,
  color: "black",
  fontWeight: "normal",
},
sixthsubheadingText: {
  fontSize: 40,
  color: "black",
  fontWeight: "normal",
},
seventhsubheadingText: {
  fontSize: 40,
  color: "black",
  fontWeight: "normal",
}
  

})


