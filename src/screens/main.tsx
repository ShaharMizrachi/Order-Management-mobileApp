import React, { useEffect, useState } from 'react';
import { Button, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import He from './../components/locales/He';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './../redux/types/types';
import { Customer } from './../redux/types/types';

import { RootState } from '../redux/store';
import { setAllProducts } from '../redux/types/productsSlice';
import { setAllCustomers } from '../redux/types/customersSlice';
import System_Button from '../components/ui/System_Button';
import System_TextInput from '../components/ui/System_TextInput';


const Main: React.FC = () => {


    const test = () => {
        console.log('====================================');
        console.log("shahar test function");
        console.log('====================================');
    }


    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text} >{He.order_system}</Text>
            </View>

            <View style={[styles.buttons_container]}>

                <View style={styles.button_container}>
                    {/* sending to product page */}
                    <System_Button
                        text={`${He.products_list}`} functionUsed={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                </View>
                <View style={styles.button_container}>
                    {/* sending to coustomer page */}
                    <System_Button text={`${He.coustomers_list}`} functionUsed={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </View>
                <View style={styles.button_container}>
                    <System_Button text={He.strat_new_order} functionUsed={() => test()} />
                </View>
                <View style={styles.button_container}>
                    <System_Button text={He.continue_exist_order} functionUsed={() => test()} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,

        minHeight: "100%"
    },
    titleMainView: {
        display: 'flex',
        marginTop: 10,
        flex: 1,
        backgroundColor: "blue"
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        overflow: 'hidden',
        textAlign: 'center',
        marginTop: 5

    },
    buttons_container: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        direction: 'rtl',
        backgroundColor: "red",
        flex: 5
    },
    button_container: {
        display: 'flex',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

export default Main;
