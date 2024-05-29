import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Expenses from '../Expenses/expenses';

export default function TabTwoScreen() {
  return (
    <View>
      <Expenses/>
    </View>
  );
}
