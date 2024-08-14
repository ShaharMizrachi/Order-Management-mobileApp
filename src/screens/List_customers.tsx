import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import He from '../components/locales/He';
import System_Button from '../components/ui/System_Button';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const List_customers = () => {



    const allCustomers = useSelector((state: RootState) => state.customers.allCustomers)



    useEffect(() => {
        console.log('====================================');
        console.log(allCustomers);
        console.log('====================================');
    }, [])




    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text} >{He.coustomers_list}</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList

                    data={allCustomers}
                    renderItem={({ item }) => (
                        <View style={styles.customerContainer} >
                            <Text style={styles.customerText}>{item.name}</Text>
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
        minHeight: "100%"
    },

    titleMainView: {
        display: 'flex',
        flex: 1,
        backgroundColor: "red"
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
        backgroundColor: "blue",
        flex: 5,
    },
    customerContainer: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    customerText: {
        textAlign: 'center',
        fontSize: 18,
    },
});