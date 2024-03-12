import React from 'react';
import { View, Text, TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const AddMeetingScreen = props => {
    const navigation = useNavigation();

    const [MeetingTitle, setMeetingTitle] = useState('');

  return (
    <View style={styles.container}>
    </View>
  );
};

export default AddMeetingScreen;