import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import He from '../locales/He'; // Assuming He is a localization object
import { Dropdown } from 'react-native-element-dropdown';
import { OrderPerCustomer } from '../../redux/types/types';

export const CustomerBox = ({ customers }: { customers: OrderPerCustomer[] }) => {
    const [selectedCustomer, setSelectedCustomer] = useState<{ label: string; value: OrderPerCustomer } | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    // Map the customers array to a new array with label and value fields
    const customerData = customers.map(customerOrder => ({
        label: customerOrder.customer.name,
        value: customerOrder,  // Pass the entire OrderPerCustomer object as value
    }));

    // Sort customers by their name in Hebrew
    const sortedCustomerData = customerData.sort((a, b) =>
        a.label.localeCompare(b.label, 'he')
    );

    useEffect(() => {
        console.log("selectedCustomer: ", selectedCustomer);
    }, [selectedCustomer])




    return (
        <View style={styles.boxContiner}>
            <Text style={styles.textStyle}>{He.customer}</Text>
            <View style={styles.dropdownContiner}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={sortedCustomerData}  // Use the mapped customer data
                    labelField="label"  // 'label' is the customer name
                    valueField="value"  // 'value' is the entire OrderPerCustomer object
                    placeholder={!isFocus ? He.search_customer : '...'}
                    searchPlaceholder={He.search_customer}
                    search
                    value={selectedCustomer}  // The selected customer in { label, value } format
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setSelectedCustomer(item);  // Set the selected customer in the correct format
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
        padding: 5,
        width: "80%",
        alignSelf: 'flex-end',
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
