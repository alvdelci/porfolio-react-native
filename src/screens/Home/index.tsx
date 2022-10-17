import { View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Card from '../../components/Card'

import icon1 from '../../assets/network.png';
import icon2 from '../../assets/dev.png';
import icon3 from '../../assets/box.png';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Card title="Software Development" img={icon1} />
            <Card title="Web Development" img={icon2} />
            <Card title="Web Design" img={icon3} />
        </SafeAreaView>
    )
}