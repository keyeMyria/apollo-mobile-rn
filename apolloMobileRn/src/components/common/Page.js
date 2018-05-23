import React from 'react';
import { View } from 'react-native';
import { Colors } from './../../helpers/Colors';

export const Page = ({ children, style }) => {
	return <View style={[{ flex: 1, backgroundColor: Colors.AppBackgroundColor }, style]}>{children}</View>;
};
