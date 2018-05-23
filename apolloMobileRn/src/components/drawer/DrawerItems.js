import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icons } from '../../helpers/Icons';
import { Paddings } from '../../helpers/Constants';
import { Margins } from '../../helpers/Constants';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP } from '../../helpers/Responsive';

var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

export const DrawerItems = ({ textTitle }) => {
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
				<Image source={Icons.LıstItemRightIcon} style={{ width: imageWidth, height: imageHeight }} />
				<Text style={{ color: '#C1C1C1', paddingLeft: 20 }}> {textTitle}</Text>
			</View>
		</TouchableRipple>
	);
};
