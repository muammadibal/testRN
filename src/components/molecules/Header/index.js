import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Gap } from '../../atoms';

const Header = () => {
    return (
      <View style={styles.page}>
        <View>
          <Text style={styles.title}>How's Today?</Text>
          <Text style={styles.subTitle}>Such a great day</Text>
        </View>
        <View style={styles.avatarBorder}>
          <Image
            source={{uri: 'https://reqres.in/img/faces/2-image.jpg'}}
            style={styles.avatar}
          />
        </View>
      </View>
    );
}

export default Header

const styles = StyleSheet.create({
  page: {
    height: 70,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    color: 'lightgrey',
  },
  avatar: {
    width: 60,
    height: 40,
    borderRadius: 8,
  },
  avatarBorder: {
      borderWidth: 0.8,
      borderColor: 'white',
      borderRadius: 10,
      borderStyle: 'dashed',
      width: 70,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
