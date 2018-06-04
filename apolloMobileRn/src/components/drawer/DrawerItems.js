import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Paddings, Margins, Colors, widthPercentageToDP } from '../../helpers';
import { TouchableRipple } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const DrawerItems = ({ textTitle, iconName, onPress }) => {
	return (
		<TouchableRipple
			onPress={() => {
				onPress();
			}}
			rippleColor={Colors.TouchableColor}
		>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: Paddings.ListItemHorizontalPadding,
					paddingVertical: Paddings.ListItemVerticalPadding,
					marginBottom: Margins.ListItemBottomMargin
				}}
			>
				<Icons name={iconName} size={widthPercentageToDP('8%')} color={Colors.DrawerItemIconColor} />
				<Text
					style={{
						textAlignVertical: 'center',
						color: '#C1C1C1',
						paddingLeft: widthPercentageToDP('5%'),
						fontSize: widthPercentageToDP('3%')
					}}
				>
					{textTitle}
				</Text>
			</View>
		</TouchableRipple>
	);
};
