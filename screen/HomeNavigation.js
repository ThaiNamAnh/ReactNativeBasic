import {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeNavigation() {
  const navigation = useNavigation();

  const dataToSend = {
    id: 1,
    name: 'nam',
  };

  useEffect(() => {
    navigation.setOptions({
        title: "Home",
    })
  }, [])

  return (
    <View>
      <Text>HomeNavigation</Text>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate('DetailNavigation', {data: dataToSend})
        }
      />
    </View>
  );
}

export default HomeNavigation;
