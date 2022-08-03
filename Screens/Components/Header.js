import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        {props.menu()}
      </TouchableOpacity>

      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#008fb3',
    alignItems: 'center',
    // justifyContent: 'center',
    elevation: 8,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 100,
  },
});
export default Header;
