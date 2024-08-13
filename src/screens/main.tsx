import React, { useEffect, useState } from 'react';
import { Button, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import He from './../components/locales/He';
import { useDispatch, useSelector } from 'react-redux';
import { Product, RootStackParamList } from './../redux/types/types';
import { Customer } from './../redux/types/types';

import { RootState } from '../redux/store';
import { setAllProducts } from '../redux/types/productsSlice';
import { setAllCustomers } from '../redux/types/customersSlice';
import System_Button from '../components/ui/System_Button';
import System_TextInput from '../components/ui/System_TextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type MainScreenNavigationProp = StackNavigationProp<RootStackParamList>;
const Main: React.FC = ({ }) => {


    const navigation = useNavigation<MainScreenNavigationProp>();

    const test = () => {
        console.log('====================================');
        console.log("shahar test function");
        console.log('====================================');
    }



    const customers_products_page = (screen_requested: string) => {
        console.log('====================================');
        console.log("screen_requested:", screen_requested);
        console.log('====================================');

        if (screen_requested == 'products') {
            navigation.navigate('List_products');
        } else if (screen_requested == 'customers') {
            navigation.navigate('List_customers');
        }
        else {
            console.error(`Unknown screen requested: ${screen_requested}`);
        }
    };


    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text} >{He.order_system}</Text>
            </View>

            <View style={[styles.buttons_container]}>

                <View style={styles.button_container}>
                    {/* sending to product page */}
                    <System_Button
                        text={`${He.products_list}`} functionUsed={() => customers_products_page("products")} />
                </View>
                <View style={styles.button_container}>
                    {/* sending to coustomer page */}
                    <System_Button text={`${He.coustomers_list}`} functionUsed={() => customers_products_page("customers")} />
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
        backgroundColor: "#FFFFFF",

        minHeight: "100%"
    },
    titleMainView: {
        display: 'flex',
        flex: 1,

    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        overflow: 'hidden',
        textAlign: 'center',
        marginTop: 25,
        textDecorationLine: 'underline'

    },
    buttons_container: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        direction: 'rtl',
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
