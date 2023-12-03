import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, onClick}) {
  return (
    <View style={style.container}>
      <Pressable onPress={onClick} android_ripple={{color: '#fff'}}>
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#4e0329',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrimaryButton;
