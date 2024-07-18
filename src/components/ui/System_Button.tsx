import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { fontFamilies } from '../constants/fonts';

const System_Button = ({ buttonWidth, text, functionUsed }: { buttonWidth: number, text: string, functionUsed: () => void }) => {

    const styles = StyleSheet.create({
        buttonPrsss: {
            backgroundColor: '#222222',
            maxWidth: buttonWidth,
            maxHeight: 100,
            paddingHorizontal: 20,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            display: 'flex'
        },

    })

    return (
        <>
            <Pressable style={styles.buttonPrsss} onPress={functionUsed} android_ripple={{ color: '#ffffff', borderless: false }}>
                <Text numberOfLines={1} style={extraStyle.text}>{text}</Text>
            </Pressable>
        </>
    )


}

const extraStyle = StyleSheet.create({
    text: {
        fontFamily: fontFamilies.inter.SemiBold,
        color: '#FFFFFF',
        fontSize: 16,

    }
})

export default System_Button


