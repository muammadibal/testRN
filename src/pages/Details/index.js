import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Gap } from '../../components/atoms'

const Details = ({route, navigation}) => {
    const {item} = route.params
    console.log(item)
    return (
      <View style={styles.page}>
        <ImageBackground source={{uri: item.avatar}} style={styles.avatar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.back}>
              <AntDesign name="left" size={25} color="black" />
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{`${item.first_name} ${item.last_name}`}</Text>
          <Text style={styles.description}>{item.email}</Text>
          <Gap height={20} />
          <Text style={styles.title}>About</Text>
          <Gap height={5} />
          <Text style={styles.description}>
            Sunt voluptate dolore nostrud ea id. Fugiat officia adipisicing
            consectetur et proident labore eiusmod. Non cillum nulla sunt est
            mollit nulla incididunt minim culpa adipisicing nisi excepteur do
            elit. Incididunt deserunt adipisicing nisi sunt irure aliqua. Quis
            sint anim culpa deserunt ad fugiat labore.
          </Text>
        </View>
      </View>
    );
}

export default Details

const styles = StyleSheet.create({
    avatar: {
        height: 250, 
        width: '100%',
    },
    back: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        marginLeft: 24,
        marginTop: 25,
        padding: 0,
    },
    content: {
        height: '100%',
        paddingHorizontal: 24,
        marginTop: -30,
        paddingTop: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: 'grey'
    }
})
