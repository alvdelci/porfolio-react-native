import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
    text: string;
}

export default function Button(props: Props) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}