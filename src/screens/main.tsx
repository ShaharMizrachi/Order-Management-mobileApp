import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import He from './../components/locales/He';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { setAllProducts } from '../redux/types/productsSlice';
import { setAllCustomers } from '../redux/types/customersSlice';

interface Product {
    id: number;
    name: string;
}

interface Customer {
    id: number;
    name: string;
    address: string;
}

const Main: React.FC = () => {
    // const [allCustomers, setAllCustomers] = useState<Customer[]>([]);
    const [newProduct, setNewProduct] = useState<Product>();
    const [showList, setShowList] = useState(false);

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


    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <View>
            <View style={styles.titleMain}><Text>{He.order_system}</Text></View>
            <View style={styles.list_input_container}>
                <View>
                    <Button title={showList ? "-" : "+"} onPress={toggleList} />
                    {showList && (
                        <ScrollView style={styles.listProductsContainer}>
                            {allProducts.map((fruit: Product) => (
                                <Text key={fruit.id}>{fruit.name}</Text>
                            ))}
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    generalDesign: {
        backgroundColor: "#D6EFD8",
        flex: 1
    },
    titleMain: {},
    list_input_container: {},
    listProductsContainer: {}
});

export default Main;
