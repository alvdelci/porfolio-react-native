import { View } from 'react-native';
import { styles } from './styles';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { THEME } from '../../theme';
import { useState } from 'react';

interface InputProps {
    label: string;
    mask?: string;
}

export default function TextArea(props: InputProps) {

    const [value, setValue] = useState<string>("");

    return (
        <View style={styles.container}>
            <FloatingLabelInput
                label={props.label}
                containerStyles={styles.input}
                labelStyles={{
                    marginLeft: 4,
                    marginTop: 4,
                    fontSize: 12
                }}
                customLabelStyles={{
                    colorFocused: THEME.COLORS.GRAY1,
                    colorBlurred: THEME.COLORS.GRAY1,
                    leftBlurred: -1,
                    leftFocused: -1,
                }}

                value={value}
                onChangeText={value => setValue(value)}
                mask={props.mask}
                staticLabel
                multiline
            />
        </View>
    );
}