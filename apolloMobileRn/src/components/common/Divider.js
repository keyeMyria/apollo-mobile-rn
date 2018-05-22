import React from 'react';
import { View } from 'react-native';
import Colors from './../../helpers/Colors';

export const Divider = ({ children, style }) => {
	return <View style={[{ height: 0.8, backgroundColor: Colors.DividerColor }, style]}>{children}</View>;
};
