import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { fontFamilies } from '../constants/fonts';
import { useEffect } from 'react';

const System_Button = ({ text, functionUsed }: { text: string, functionUsed: () => void }) => {



    return (
        <>
            <Pressable style={styles.buttonPrsss} onPress={functionUsed} android_ripple={{ color: '#ffffff', borderless: false }}>
                <Text numberOfLines={1} style={extraStyle.text}>{text}</Text>
            </Pressable>
        </>
    )


}




const styles = StyleSheet.create({
    buttonPrsss: {
        backgroundColor: '#222222',
        maxWidth: '100%',
        maxHeight: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        display: 'flex',
    },

})

const extraStyle = StyleSheet.create({
    text: {
        fontFamily: fontFamilies.inter.SemiBold,
        color: '#FFFFFF',
        fontSize: 18,

    },
})

export default System_Button


