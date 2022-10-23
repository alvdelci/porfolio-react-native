import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface dataProps {
    title: string;
    subtitle: string;
}

export default function InfoItem(props: dataProps) {
    return (
        <View style={styles.container}>
            <View style={styles.externalCircle}>
                <View style={styles.internalCircle}></View>
            </View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}