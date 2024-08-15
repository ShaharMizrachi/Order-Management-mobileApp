import React, { useEffect } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import He from '../components/locales/He'
import { fontFamilies } from '../components/constants/fonts'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Product } from '../redux/types/types'

const List_products = () => {


    const allProducts = useSelector((state: RootState) => state.products.allProducts);

    const handlePressProduct = (item: Product) => {
        // feuter option 
    }


    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text} >{He.products_list}</Text>
            </View>

            {/* <View style={styles.newConstumerPageButton}><System_Button text={He.new_coustomer} functionUsed={() => navigation.navigate('add_new_customer')} /></View> */}


            <View style={styles.listContainer}>
                <FlatList
                    data={allProducts}
                    renderItem={({ item }) => (
                        <View style={styles.productsContainer} >
                            <Pressable
                                style={({ pressed }) => [
                                    styles.productContainer,
                                    { backgroundColor: pressed ? '#007AFF' : 'white' },
                                ]}
                                onPress={() => handlePressProduct(item)}
                                android_ripple={{ color: 'white', borderless: false }}
                            >
                                <Text style={styles.productText}>{item.name}</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>


        </View>
    )
}

export default List_products


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
    productsContainer: {
        padding: 3,
        marginVertical: 1,
        marginHorizontal: 26,
        // backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    productContainer: {
        padding: 3,
        marginVertical: 1,
        marginHorizontal: 26,
        // backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    productText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fontFamilies.inter.SemiBold,
    },
    // newConstumerPageButton: {
    //     flex: 0.5,
    //     // backgroundColor: "green",
    //     marginHorizontal: 40

    // }

});