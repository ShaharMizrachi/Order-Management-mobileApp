import React from 'react';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = () => {
    return (
        <Calendar
            // Specify style for calendar container
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350
            }}
            // Specify theme properties to change default colors and styles
            theme={{
                arrowColor: 'orange',
                todayTextColor: 'red',
                dayTextColor: 'blue',
                textDisabledColor: 'gray',
                monthTextColor: 'purple',
                indicatorColor: 'blue',
            }}
            // Mark specific dates
            markedDates={{
                '2023-09-16': { marked: true, dotColor: 'blue' },
                '2023-09-17': { marked: true, dotColor: 'blue' },
                '2023-09-18': { marked: true, dotColor: 'blue' },
            }}
        />
    );
};

export default CustomCalendar;
