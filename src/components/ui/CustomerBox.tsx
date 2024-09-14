import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import He from '../locales/He'

export const CustomerBox = () => {

    return (
        <View style={styles.boxContiner}>
            <Text style={styles.textStyle}>{He.customer}</Text>

        </View>
    )

}

export default CustomerBox

const styles = StyleSheet.create({
    boxContiner: {
        borderColor: '#111111',
        borderWidth: 3,
        borderStyle: 'solid',
        width: "100%",
        padding: 5,
        // marginHorizontal: 40,

    },
    textStyle: {
        fontWeight: 'medium',
        color: '#111111',
        textDecorationLine: 'underline',
    }
})