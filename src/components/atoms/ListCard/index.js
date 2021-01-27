import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Gap } from '..';

const ListCard = ({avatar, firstName, lastName, email, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: avatar}} style={styles.avatar} />
        <Gap width={10} />
        <View style={styles.content}>
          <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.subTitle}>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 24,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 2, 
        borderRadius: 8,
        flexDirection: 'row'
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    title: {
        fontSize: 14
    },
    subTitle: {
        fontSize: 10,
        color: 'grey'
    },
    content: {
        justifyContent: 'center'
    }
})
