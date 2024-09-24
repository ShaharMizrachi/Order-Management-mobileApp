import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import He from '../locales/He'; // Assuming He is a localization object
import { Dropdown } from 'react-native-element-dropdown';
import { Button } from 'react-native-paper';
import System_Button from './System_Button';

const ProductBox = () => {

    const data = [
        { label: 'גבר', value: 'male' },
        { label: 'אישה', value: 'female' },
        { label: 'אחר', value: 'other' },
    ];

    const [gender, setGender] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [amount, setAmount] = useState<number>(0)

    const sortedData = data.sort((a, b) => a.label.localeCompare(b.label, 'he'));

    const functionUsed = () => {

    }

    const deleteProduct = () => {

    }


    return (
        <View style={styles.boxContiner}>
            {/* <Text style={styles.textStyle}>{He.product}</Text> */}
            <View style={styles.contectContiner}>
                <View style={styles.dropdownContiner}>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? He.search_product : '...'}
                        searchPlaceholder={He.search_product}
                        search
                        value={gender}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setGender(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <View style={styles.amountSectionContiner}>
                    <Pressable style={styles.buttonPrsss} onPress={() => setAmount(prev => prev + 1)} android_ripple={{ color: '#ffffff', borderless: false }}>
                        <Text style={styles.iconStyle}>
                            +
                        </Text>
                    </Pressable>

                    <Text style={styles.textStyle}>
                        {amount}
                    </Text>
                    <Pressable style={styles.buttonPrsss} onPress={() => setAmount(prev => prev != 0 ? prev - 1 : prev)} android_ripple={{ color: '#ffffff', borderless: false }}>
                        <Text style={styles.iconStyle}>
                            -
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.deleteButton}>
                    <System_Button text={He.delete} functionUsed={() => deleteProduct()} />
                </View>
            </View>

        </View>
    );
}

export default ProductBox


const styles = StyleSheet.create({
    boxContiner: {
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        padding: 1,
        display: 'flex',
        alignSelf: 'flex-end'

    },
    textStyle: {
        fontWeight: 'medium',
        color: '#111111',
        fontSize: 25,
        marginHorizontal: "6%"
    },
    dropdownContiner: {
        // marginHorizontal: 100
        padding: 5,
        width: "40%",
        alignSelf: 'flex-end'
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        textAlign: 'right',
    },
    contectContiner: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    amountSectionContiner: {
        flexDirection: 'row-reverse',
        width: "20%",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: "3%"

    },
    iconStyle: {
        fontSize: 18,
        textAlign: "center"
    },
    buttonPrsss: {

        borderRadius: 100,
        borderColor: '#111111',
        borderWidth: 1,
        width: 25,
    },
    deleteButton: {
        width: "30%",
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: "2%"
    }
});