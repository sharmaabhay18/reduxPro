import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { headerView, headerText } = style;
  return (
    <View style={headerView}>
    <Text style={headerText}> {props.headerTitle} </Text>
    </View>
    );
};

const style = {
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    padding: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 3
  }
};
export default Header;
