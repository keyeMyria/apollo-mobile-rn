import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP, Colors } from '../../../helpers';
export const DefinationRow = ({ title, number }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingHorizontal: widthPercentageToDP('3%'),
				paddingTop: widthPercentageToDP('1%')
			}}
		>
			<Text style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('3%') }}>{title}</Text>
			<Text style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('3%') }}>{number}</Text>
		</View>
	);
};
