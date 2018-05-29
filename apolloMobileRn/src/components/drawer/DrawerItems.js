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
			rippleColor={Colors.DrawerItemRippleColor}
		>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: Paddings.ListItemHorizontalPadding,
					paddingVertical: Paddings.ListItemVerticalPadding,
					marginBottom: Margins.ListItemBottomMargin
				}}
			>
				<Icons name={iconName} size={30} color={Colors.DrawerItemIconColor} />
				<Text style={{ textAlignVertical: 'center', color: '#C1C1C1', paddingLeft: 20, fontSize: 13 }}>
					{textTitle}
				</Text>
			</View>
		</TouchableRipple>
	);
};
