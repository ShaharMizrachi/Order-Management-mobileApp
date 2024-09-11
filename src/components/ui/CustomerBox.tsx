import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class CustomerBox extends Component {
    render() {
        return (
            <View style={styles.boxContiner}>
                <Text>CustomerBox</Text>
            </View>
        )
    }
}

export default CustomerBox

const styles = StyleSheet.create({
    boxContiner: {
        borderColor: '#111111',
        borderWidth: 5,
        borderStyle: 'solid',
        width: "100%",
        // marginHorizontal: 40,

    }
})