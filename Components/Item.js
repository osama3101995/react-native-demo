import { StyleSheet, Text, View } from "react-native";

export default function Item ({ title, data }) {
    return <View style={styles.item}>
      <Text >{title}</Text>
      <Text >{data}</Text>
    </View>
  }

  
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    title: {
      fontSize: 32,
    },
  });