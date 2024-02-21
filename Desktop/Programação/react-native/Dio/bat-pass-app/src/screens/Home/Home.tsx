import { View, Text } from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from './style'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
export default function Home() {
    return (
        <View style={styles.containerApp}>
            <View style={styles.containerLogo}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                <BatButton />
            </View>
            <StatusBar style="light" />
        </View>
    )
}