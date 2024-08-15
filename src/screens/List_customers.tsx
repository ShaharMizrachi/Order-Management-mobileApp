import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import He from '../components/locales/He';
import System_Button from '../components/ui/System_Button';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fontFamilies } from '../components/constants/fonts';
import System_TextInput from '../components/ui/System_TextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Customer, RootStackParamList } from '../redux/types/types';
import { useNavigation } from '@react-navigation/native';
type MainScreenNavigationProp = StackNavigationProp<RootStackParamList>;


const List_customers = () => {

    const navigation = useNavigation<MainScreenNavigationProp>();

    const allCustomers = useSelector((state: RootState) => state.customers.allCustomers)



    useEffect(() => {
        console.log('====================================');
        console.log(allCustomers);
        console.log('====================================');
    }, [])


    const handlePressCustomer = (item: Customer) => {
        console.log('====================================');
        console.log(item);
        console.log('====================================');
        navigation.navigate('customer_page', { item })
    }


    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text} >{He.coustomers_list}</Text>
            </View>

            <View style={styles.newConstumerPageButton}><System_Button text={He.new_coustomer} functionUsed={() => navigation.navigate('add_new_customer')} /></View>


            <View style={styles.listContainer}>
                <FlatList
                    data={allCustomers}
                    renderItem={({ item }) => (
                        <View style={styles.customerContainer} >
                            <Pressable
                                style={({ pressed }) => [
                                    styles.customerContainer,
                                    { backgroundColor: pressed ? '#007AFF' : 'white' },
                                ]}
                                onPress={() => handlePressCustomer(item)}
                                android_ripple={{ color: 'white', borderless: false }}
                            >
                                <Text style={styles.customerText}>{item.name}</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>


        </View>
    );
}

export default List_customers



const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        minHeight: "100%",

    },

    titleMainView: {
        display: 'flex',
        flex: 1,
        // backgroundColor: "red"
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
    listContainer: {
        display: 'flex',
        // backgroundColor: "blue",
        flex: 5,
    },
    customerContainer: {
        padding: 3,
        marginVertical: 1,
        marginHorizontal: 26,
        // backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    customerText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fontFamilies.inter.SemiBold,
    },
    newConstumerPageButton: {
        flex: 0.5,
        // backgroundColor: "green",
        marginHorizontal: 40

    }

});