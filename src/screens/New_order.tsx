import React, { useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import He from '../components/locales/He';
import { Oredr } from '../redux/types/types'; // Correct the spelling if needed
import System_Button from '../components/ui/System_Button';
import { DatePickerModal } from 'react-native-paper-dates';
import { Icon, Provider as PaperProvider } from 'react-native-paper'; // Correct import
import { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';
import { Button as ButtonPapar } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';  // Import the Calendar component

const New_order = () => {
    const [newOrder, setNewOrder] = useState<Oredr>(); // Correct the spelling if needed

    const saveOrder = () => {
        // Save order logic here
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = tomorrow.getDate();
    const month = tomorrow.getMonth() + 1; // Months are zero-based, so we add 1
    const year = tomorrow.getFullYear();

    useEffect(() => {
        console.log('====================================');
        const formattedDate = `${day}/${month}/${year}`;
        console.log(formattedDate);
        console.log('====================================');
    }, []);

    const [date, setDate] = useState<CalendarDate>(new Date());
    const [open, setOpen] = useState(false);

    const onConfirm = (params: any) => {
        setOpen(false);
        setDate(params.date);
    };

    const onDismiss = () => {
        setOpen(false);
    };

    return (
        <View style={styles.pageContainer}>
            <View style={styles.titleMainView}>
                <Text style={styles.title_text}>{He.new_order}</Text>
            </View>
            <View style={styles.seconderyTitle}>
                <Text>{ }</Text>
                <Text></Text>
            </View>
            <View style={{ backgroundColor: "red", flex: 5 }}>
                <PaperProvider>
                    <View style={{ padding: 20 }}>
                        <ButtonPapar onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                            {date ? date.toLocaleDateString() : 'Pick a date'}
                        </ButtonPapar>

                        <DatePickerModal
                            locale="he"
                            mode="single"
                            visible={open}
                            onDismiss={onDismiss}
                            date={date}
                            onConfirm={onConfirm}
                        />

                        {/* Add Calendar component */}

                    </View>
                </PaperProvider>
            </View>

            {/* <View style={styles.saveButton}>
                <System_Button text={He.save} functionUsed={() => saveOrder()} />
            </View> */}
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
    seconderyTitle: {},
    saveButton: {
        flex: 0.5,
        marginHorizontal: 40,
    },
});
