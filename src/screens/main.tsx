import React, { useEffect, useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import He from './../components/locales/He';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './../redux/types/types';
import { Customer } from './../redux/types/types';

import { RootState } from '../redux/store';
import { setAllProducts } from '../redux/types/productsSlice';
import { setAllCustomers } from '../redux/types/customersSlice';
import System_Button from '../components/ui/System_Button';


const Main: React.FC = () => {
    const [newProduct, setNewProduct] = useState<Product>();
    const [showList, setShowList] = useState({
        showAllProducts: false,
        showAllCustomers: false
    });

    const dispatch = useDispatch();
    const allProducts = useSelector((state: RootState) => state.products.allProducts);
    const allCustomers = useSelector((state: RootState) => state.customers.allCustomers)
    useEffect(() => {
        dispatch(setAllProducts([
            { id: 1, name: He.apple },
            { id: 2, name: He.banana },
            { id: 3, name: He.strawberry },
            { id: 4, name: He.grapes },
            { id: 5, name: He.orange },
            { id: 6, name: He.pineapple },
            { id: 7, name: He.mango },
            { id: 8, name: He.watermelon },
            { id: 9, name: He.melon },
            { id: 10, name: He.plum }
        ]));

        dispatch(setAllCustomers([
            { id: 1, name: He.customer1.name, address: He.customer1.address },
            { id: 2, name: He.customer2.name, address: He.customer2.address },
            { id: 3, name: He.customer3.name, address: He.customer3.address },
            { id: 4, name: He.customer4.name, address: He.customer4.address },
            { id: 5, name: He.customer5.name, address: He.customer5.address }
        ]))

    }, [dispatch]);


    const toggleList = (typeOfList: 'showAllProducts' | 'showAllCustomers') => {
        setShowList(prevState => ({
            ...prevState,
            [typeOfList]: !prevState[typeOfList]
        }))
    };


    const inputOnChange = (event: any, inputType: string) => {
        console.log(event.nativeEvent.text)
        console.log('====================================');
        console.log(inputType);
        console.log('====================================');
    }


    const test = () => {
        console.log('====================================');
        console.log("shahar test function");
        console.log('====================================');
    }


    return (
        <View>
            <View style={styles.titleMainView}><Text style={styles.title_text} >{He.order_system}</Text></View>
            <View style={styles.list_input_container}>
                <View>
                    <TextInput onChange={(text) => inputOnChange(text, "newproductFiled")} />
                    <System_Button buttonWidth={100} text={showList.showAllProducts ? "-" : "+"} functionUsed={() => toggleList('showAllProducts')} />
                    {showList.showAllProducts && (
                        <ScrollView style={styles.listProductsContainer}>
                            {allProducts.map((fruit: Product) => (
                                <Text key={fruit.id}>{fruit.name}</Text>
                            ))}
                        </ScrollView>
                    )}
                </View>
                <View>
                    <TextInput onChange={(text) => inputOnChange(text, "newCustomerFiled")} />
                    <System_Button buttonWidth={100} text={showList.showAllCustomers ? "-" : "+"} functionUsed={() => toggleList('showAllCustomers')} />
                    {showList.showAllCustomers && (
                        <ScrollView>
                            {allCustomers.map((customer: Customer) =>
                                <Text key={customer.id}>
                                    {customer.name}
                                </Text>
                            )}
                        </ScrollView>
                    )}
                </View>
            </View>
            <View style={styles.buttons_container}>
                <View><System_Button buttonWidth={200} text={He.strat_new_order} functionUsed={() => test()} /></View>
                <View><System_Button buttonWidth={200} text={He.continue_exist_order} functionUsed={() => test()} /></View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    generalDesign: {
        backgroundColor: "#D6EFD8",
        flex: 1
    },
    titleMainView: {
        display: 'flex',
        marginTop: 10
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        overflow: 'hidden',
        textAlign: 'center'

    },
    list_input_container: {},
    listProductsContainer: {},
    buttons_container: {}
});

export default Main;
