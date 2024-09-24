import React, { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import He from '../components/locales/He';
import { Order } from '../redux/types/types'; // Correct the spelling here
import System_Button from '../components/ui/System_Button';
import DatePicker from 'react-native-date-picker';
import CustomerBox from '../components/ui/CustomerBox';
import ProductBox from '../components/ui/ProductBox';

const New_order = () => {
    const [date, setDate] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState<string>("")
    const [open, setOpen] = useState(false); // State to control the visibility of DatePicker

    const saveOrder = () => {
        // Implement save order logic here
        console.log("Order saved with date:", date);
    };

    useEffect(() => {
        const TempformattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        setFormattedDate(TempformattedDate)
        console.log('Formatted Date:', formattedDate);
    }, [date]);


    useEffect(() => {
        console.log('====================================');
        console.log(date);
        console.log('====================================');
    }, [date])



    return (
        <View style={styles.pageContainer}>
            <View style={styles.toolBar}>
                <View style={styles.titleMainView}>
                    <Text style={styles.title_text}>{He.new_order}</Text>
                </View>
                <Pressable onPress={() => setOpen(!open)} android_ripple={{ color: 'red' }} style={styles.dateDisplayContiner}>
                    <Text style={styles.dateText}>{formattedDate}</Text>
                </Pressable>
            </View>
            <View style={styles.CenterOrders}>
                {open && (
                    <View style={styles.DatePicker}>
                        <DatePicker
                            date={date}
                            onDateChange={setDate}
                            mode="date"
                        />
                    </View>)}
                <CustomerBox />
                <ProductBox />
            </View>




            <View style={styles.buttonsContiner}>
                <View style={styles.saveButton}>
                    <System_Button text={He.save} functionUsed={() => saveOrder()} />
                </View>
                <View>
                    <System_Button text={He.print} functionUsed={() => saveOrder()} />
                </View>
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
        alignSelf: 'center',
        width: "100%"
    },
    toolBar: {
        flex: 1,
        backgroundColor: "green"
    },
    titleMainView: {
        flex: 1,
    },
    dateDisplayContiner: {
        flex: 1
    },
    dateText: {
        fontWeight: 'medium',
        color: '#111111',
        fontSize: 20,
        textAlign: 'right',
        marginRight: 10
    },
    DatePicker: {
        alignItems: 'center',
        position: "absolute"
    },
    title_text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#111111',
        textAlign: 'center',
        marginTop: 25,
        textDecorationLine: 'underline',
    },
    CenterOrders: {
        flex: 3,
    },
    saveButton: {
        marginBottom: 13,
        marginTop: 5
    },
    buttonsContiner: {
        flex: 0.8,
        marginHorizontal: 40,
        backgroundColor: "blue",
    }
});
