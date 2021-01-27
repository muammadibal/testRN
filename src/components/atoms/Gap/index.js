import React from 'react'
import {View, StyleSheet} from 'react-native';

const Gap = ({height, width}) => {
    return (
        <View style={[{ height, width }, styles.page]}/>
    )
}

export default Gap

const styles = StyleSheet.create({
})

