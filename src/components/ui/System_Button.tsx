import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const System_Button = ({ buttonWidth, text }: { buttonWidth: number, text: string }) => {
    return (
        <>
            <Pressable style={styles.buttonPrsss}>
                <Text numberOfLines={1} style={styles.text}>Login</Text>
            </Pressable>
        </>
    )
}




const styles = StyleSheet.create({
    buttonPrsss: {
        backgroundColor: '#222222',
        maxWidth: 150,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    }
})



export default System_Button


