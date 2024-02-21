import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

interface BatTextInputProps{
    pass:string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
        <TextInput 
        style={styles.inputer}
        placeholder='Pass'
        value={props.pass}
        />
  );
}