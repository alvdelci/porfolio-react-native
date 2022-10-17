import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface CardProps {
    img: ImageSourcePropType;
    title: string;
}

export default function Card(props: CardProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.img} />
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.footer}></View>
        </View>
    )
}