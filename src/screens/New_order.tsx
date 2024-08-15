import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import He from '../components/locales/He'
import { Oredr } from '../redux/types/types';
import System_Button from '../components/ui/System_Button';

const New_order = () => {

    const [newOrder, setNewOrder] = useState<Oredr>();

    const saveOrder = () => {

    }



    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text} >{He.new_order}</Text>
            </View>
            <View style={styles.seconderyTitle}>
                <Text>{ }</Text>
                <Text></Text>
            </View>

            <View style={styles.saveButton}><System_Button text={He.save} functionUsed={() => saveOrder()} /></View>
        </View>
    )
}

export default New_order



const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        minHeight: "100%",

    },

    titleMainView: {
        display: 'flex',
        flex: 1,
        // backgroundColor: "red"
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        overflow: 'hidden',
        textAlign: 'center',
        marginTop: 25,
        textDecorationLine: 'underline',
        flex: 1
    },
    seconderyTitle: {

    },
    saveButton: {
        flex: 0.5,
        // backgroundColor: "green",
        marginHorizontal: 40

    }

});