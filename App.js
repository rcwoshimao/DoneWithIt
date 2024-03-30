import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';

export default function App() {
  let x=1; 
  console.log("Now try this.");
  console.log("App Executed! Hellow! ");
  const handlePress = () => console.log("Text pressed!!! THIS IS A LOG MESSAGE! WHY ARE YOU NOT LOGGING BRUH!! PLEASEE LOG!! ");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={10} onPress={handlePress}>Hello World! </Text>
      <TouchableWithoutFeedback>
      <Image 
      blurRadius={2}
      fadeDuration={1000}
      source={{
        width: 200, 
        height: 300,
        uri:"https://picsum.photos/200/300"
      }}/>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: "center",
    alignItems: "center",
    fontSize: 100,
  },
});
