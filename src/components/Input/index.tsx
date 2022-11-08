import { View } from 'react-native';
import { styles } from './styles';
import { FloatingLabelInput } from 'react-native-floating-label-input';

export default function Input() {
    return (
        <View style={styles.container}>
            <FloatingLabelInput
                label='Name'
                containerStyles={styles.input}
            />
        </View>
    );
}