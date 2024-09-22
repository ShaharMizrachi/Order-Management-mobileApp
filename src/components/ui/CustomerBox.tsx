import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import He from '../locales/He'; // Assuming He is a localization object
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Now using react-native-vector-icons

export const CustomerBox = () => {
    const data = [
        { label: 'גבר', value: 'male' },
        { label: 'אישה', value: 'female' },
        { label: 'אחר', value: 'other' },
    ];

    const [gender, setGender] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const sortedData = data.sort((a, b) => a.label.localeCompare(b.label, 'he'));


    return (
        <View style={styles.boxContiner}>
            <Text style={styles.textStyle}>{He.customer}</Text>
            <View style={styles.dropdownContiner}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? He.search_customer : '...'}
                    searchPlaceholder={He.search_customer}
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
        </View>
    );
};

export default CustomerBox;

const styles = StyleSheet.create({
    boxContiner: {
        borderColor: '#111111',
        borderWidth: 3,
        borderStyle: 'solid',
        width: '100%',
        padding: 5,
    },
    textStyle: {
        fontWeight: 'medium',
        color: '#111111',
        textDecorationLine: 'underline',

    },
    dropdownContiner: {
        // marginHorizontal: 100
        padding: 5,
        width: "80%",
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
});
