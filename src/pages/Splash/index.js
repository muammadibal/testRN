import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import { Gap } from '../../components';


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 1500);
    }, [])

    return (
      <View style={styles.page}>
        <Entypo name="flow-tree" size={50} color="steelblue"/>
        <Gap height={5}/>
        <Text style={styles.title}>Test App</Text>
      </View>
    );
}

export default Splash

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'steelblue',
  },
});
