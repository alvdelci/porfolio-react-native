import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoItem from '../../components/InfoItem';
import Card from '../../components/Card';
import { styles } from './styles';

import icon1 from '../../assets/network.png';
import icon2 from '../../assets/dev.png';
import icon3 from '../../assets/box.png';
import avatar from '../../assets/me.jpeg';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textLeft}>Rafithy</Text>
                    <View style={styles.contentRight}>
                        <Text style={styles.contentRightText}>About me</Text>
                        <Text style={styles.contentRightText}>Services</Text>
                        <Text style={styles.contentRightText}>Contact me</Text>
                    </View>
                </View>
                <View style={styles.presentation}>
                    <View>
                        <Text style={styles.title}>Hi, I am{`\n`}Rafithy Dev</Text>
                        <Text style={styles.subtitle}>Fullstack Developer</Text>

                        <View style={styles.presentationButtons}>
                            <TouchableOpacity style={styles.downloadButton}>
                                <Text style={styles.buttonText}>Download CV</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.learnMoreButton}>
                                <Text style={styles.buttonText}>Learn More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image style={styles.avatar} source={avatar} />
                </View>

                <Text style={styles.centeredTitle}>About</Text>

                <Text style={styles.about}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                <View style={styles.info}>
                    <InfoItem title="Full Name" subtitle='Rafithy' />
                    <InfoItem title="Email Address" subtitle='rafithydev@gmail.com' />
                    <InfoItem title="Website" subtitle='alvdelci.github.io' />
                </View>

                <Text style={styles.centeredTitle}>What i do</Text>

                <View style={styles.whatIDo}>
                    <Card title="Software Development" img={icon1} />
                    <Card title="Web Development" img={icon2} />
                    <Card title="Web Design" img={icon3} />
                </View>

                <Text style={styles.centeredTitle}>My Main Skills</Text>

                <View style={styles.skills}>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillPercent}>90%</Text>
                        <Text style={styles.skillTitle}>REACT</Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillPercent}>80%</Text>
                        <Text style={styles.skillTitle}>TYPESCRIPT</Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillPercent}>60%</Text>
                        <Text style={styles.skillTitle}>NODE</Text>
                    </View>
                    <View style={styles.skillItem}>
                        <Text style={styles.skillPercent}>30%</Text>
                        <Text style={styles.skillTitle}>REACT NATIVE</Text>
                    </View>
                </View>

                <Text style={styles.centeredTitle}>Get in touch</Text>
                <Text style={styles.centeredTitle}>Get in touch</Text>

            </ScrollView>
        </SafeAreaView>
    )
}