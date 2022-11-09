import { View } from 'react-native';
import { styles } from './styles';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { THEME } from '../../theme';
import { useState } from 'react';

interface InputProps {
    label: string;
    mask?: string;
}

export default function Input(props: InputProps) {

    const [value, setValue] = useState<string>("");

    return (
        <View style={styles.container}>
            <FloatingLabelInput
                label={props.label}
                containerStyles={styles.input}
                customLabelStyles={{
                    colorFocused: THEME.COLORS.GREEN,
                    colorBlurred: THEME.COLORS.GRAY1,
                    topFocused: -15,
                    leftBlurred: -1,
                    fontSizeBlurred: 12,
                    fontSizeFocused: 12
                }}
                value={value}
                onChangeText={value => setValue(value)}
                mask={props.mask}
            />
        </View>
    );
}