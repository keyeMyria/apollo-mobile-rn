import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
// import { Icons } from '../../helpers/Icons';
import { Paddings } from '../../helpers/Constants';
import { Margins } from '../../helpers/Constants';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP } from '../../helpers/Responsive';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from './../../helpers/Colors';

export const DrawerItems = ({ textTitle, iconName }) => {
	return (
		<TouchableRipple onPress={() => console.log('Pressed')} rippleColor="#BF360C">
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: Paddings.ListItemHorizontalPadding,
					paddingVertical: Paddings.ListItemVerticalPadding,
					marginBottom: Margins.ListItemBottomMargin
				}}
			>
				<Icons name={iconName} size={30} color="#FFB91D" />
				<Text style={{ color: '#C1C1C1', paddingLeft: 20, fontSize: 13 }}> {textTitle}</Text>
			</View>
		</TouchableRipple>
	);
};