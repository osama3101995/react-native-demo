import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import CameraDemo from './Components/CameraDemo';
import { deviceInfo } from './Components/DeviceInfo';
import Item from './Components/Item';





export default function App() {


  const renderItem = ({ item }) => <Item title={item.title}  data={item.data}/>;

  return (

    <View  style={styles.container}>
      
      <CameraDemo></CameraDemo>
      <FlatList data={deviceInfo} renderItem={renderItem} keyExtractor={item => item.id} />

    </View>

  );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
