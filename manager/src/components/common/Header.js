import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyles: {
    fontSize: 20
  }
};

export { Header };
