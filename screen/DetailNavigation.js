import {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function DetailNavigation({route}) {
  const navigation = useNavigation();
  const dataFromHome = route.params.data;

  useEffect(() => {
    navigation.setOptions({
        title: "Detail",
    })
  }, [])

  return (
    <View>
      <Text>DetailNavigation</Text>
      <Text>{dataFromHome.id}</Text>
      <Text>{dataFromHome.name}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeNavigation')}
      />
    </View>
  );
}

export default DetailNavigation;
