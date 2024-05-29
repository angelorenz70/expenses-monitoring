import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { TextInput, Button  } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';

export default function addExpenses() {
    const [text, setText] = useState("");

    const handleEnter = () => {
        router.replace('(tabs)/two');
    }

    return (
        <View className='p-3 gap-3'>
            <Text style={styles.title}>SPEND AMOUNT</Text>
            <TextInput
                className='bg-white'
                label="Amount"
                value={text}
                onChangeText={text => setText(text)}
            />
            <Button className='bg-slate-600' mode="contained" onPress={handleEnter}>
                ENTER
            </Button>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
