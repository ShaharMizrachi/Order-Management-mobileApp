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


    /////////////////////////////////////////////

    const allProducts = useSelector((state: RootState) => state.products.allProducts);
    const allCustomers = useSelector((state: RootState) => state.customers.allCustomers)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(setAllProducts([
            { id: 1, name: He.apple, lastPriceUsed: 10.0 },
            { id: 2, name: He.banana, lastPriceUsed: 5.0 },
            { id: 3, name: He.strawberry, lastPriceUsed: 12.0 },
            { id: 4, name: He.grapes, lastPriceUsed: 8.0 },
            { id: 5, name: He.orange, lastPriceUsed: 7.0 },
            { id: 6, name: He.pineapple, lastPriceUsed: 15.0 },
            { id: 7, name: He.mango, lastPriceUsed: 14.0 },
            { id: 8, name: He.watermelon, lastPriceUsed: 9.0 },
            { id: 9, name: He.melon, lastPriceUsed: 11.0 },
            { id: 10, name: He.plum, lastPriceUsed: 6.0 }
        ]));


        dispatch(setAllCustomers([
            { id: 1, name: He.customer1.name, address: He.customer1.address },
            { id: 2, name: He.customer2.name, address: He.customer2.address },
            { id: 3, name: He.customer3.name, address: He.customer3.address },
            { id: 4, name: He.customer4.name, address: He.customer4.address },
            { id: 5, name: He.customer5.name, address: He.customer5.address },
            { id: 6, name: He.customer6.name, address: He.customer6.address },
            { id: 7, name: He.customer7.name, address: He.customer7.address },
            { id: 8, name: He.customer8.name, address: He.customer8.address },
            { id: 9, name: He.customer9.name, address: He.customer9.address },
            { id: 10, name: He.customer10.name, address: He.customer10.address },
            { id: 11, name: He.customer11.name, address: He.customer11.address },
            { id: 12, name: He.customer12.name, address: He.customer12.address },
            { id: 13, name: He.customer13.name, address: He.customer13.address },
            { id: 14, name: He.customer14.name, address: He.customer14.address },
            { id: 15, name: He.customer15.name, address: He.customer15.address }
        ]));


    }, [dispatch]);

    ////////////////////////////////


    const navigation = useNavigation<MainScreenNavigationProp>();

    const test = () => {
        console.log('====================================');
        console.log("shahar test function");
        console.log('====================================');
    }



    const customers_products_page = (screen_requested: string) => {
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
                    <System_Button text={He.strat_new_order} functionUsed={() => navigation.navigate('new_order')} />
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
