import React, { useCallback, useEffect, useId, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { fontFamilies } from '../constants/fonts';


const System_TextInput = ({ onChangeFunc, textValueState, placeHolder, keyboardType }:
    { onChangeFunc: (text?: string) => void, textValueState: string, placeHolder?: string, keyboardType?: string }) => {



    return (
        <>
            <TextInput
                style={[
                    styles.defaultStyle,
                ]}
                placeholder={placeHolder}
                value={textValueState}
                onChangeText={onChangeFunc}
            // keyboardType=

            />
        </>
    )
}

const styles = StyleSheet.create({
    defaultStyle: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        fontFamily: fontFamilies.inter.medium,
        fontSize: 16,
        backgroundColor: '#EBEBEB',
        color: '#000',
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        borderStyle: 'solid',
    },
    errorStyle: {
        borderColor: '#EE4444',
    },
});

export default System_TextInput