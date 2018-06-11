import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP, Colors } from '../../../helpers';
export const Items = ({ store }) => {
	return (
		<View
			style={{
				paddingTop: widthPercentageToDP('0.5%')
			}}
		>
			<Text style={{ color: Colors.BasicTitleColor, fontSize: widthPercentageToDP('3%') }}>{store}</Text>
		</View>
	);
};
