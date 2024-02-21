import React, { useState } from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from './styles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [password, setPassword] = useState("");

    function handleGenerateButton() {
        let generateToken = generatePassword();
        setPassword(generateToken);
    }

    async function handleCopyToClipboard() {
        await Clipboard.setStringAsync(password);
    }
    return (
        <>
            <BatTextInput pass={password}/>

            <Pressable
                style={styles.button}
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={handleCopyToClipboard}
            >
                <Text style={styles.text}>🐱 COPY</Text>
            </Pressable>
        </>
    );
}