import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import He from '../components/locales/He';
import { Order } from '../redux/types/types'; // Correct the spelling here
import System_Button from '../components/ui/System_Button';
import DatePicker from 'react-native-date-picker';

const New_order = () => {
    const [newOrder, setNewOrder] = useState<Order>(); // Corrected the spelling to Order
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false); // State to control the visibility of DatePicker

    const saveOrder = () => {
        // Implement save order logic here
        console.log("Order saved with date:", date);
    };

    useEffect(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = `${tomorrow.getDate()}/${tomorrow.getMonth() + 1}/${tomorrow.getFullYear()}`;
        console.log('Formatted Date:', formattedDate);
    }, []);

    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text}>{He.new_order}</Text>
            </View>

            {/* Button to open DatePicker */}
            <View style={styles.buttonContainer}>
                <Button title={open ? "Close DatePicker" : "Open DatePicker"} onPress={() => setOpen(!open)} />
            </View>

            {/* Conditional rendering of DatePicker */}
            {open && (
                <View>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        mode="date"  // You can set it to "date", "time", or "datetime"
                    />
                </View>
            )}

            <View style={styles.saveButton}>
                {/* Uncomment and use this to add save functionality */}
                <System_Button text={He.save} functionUsed={() => saveOrder()} />
            </View>
        </View>
    );
};

export default New_order;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        minHeight: "100%",
    },
    titleMainView: {
        flex: 1,
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        textAlign: 'center',
        marginTop: 25,
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        margin: 20,
    },
    saveButton: {
        flex: 0.5,
        marginHorizontal: 40,
    },
});
