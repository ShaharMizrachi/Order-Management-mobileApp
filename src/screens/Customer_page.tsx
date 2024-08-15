import { RouteProp, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Customer, RootStackParamList } from '../redux/types/types'
type CustomerPageRouteProp = RouteProp<RootStackParamList, 'customer_page'>;

const Customer_page = () => {

    const route = useRoute<CustomerPageRouteProp>();
    const item: Customer | undefined = route.params?.item;


    useEffect(() => {
        console.log('#####################################');
        console.log(item);
        console.log('#####################################');
    }, [])



    return (
        <View>
            <Text>{item?.name}</Text>
            <Text>{item?.address}</Text>
        </View>
    )
}

export default Customer_page