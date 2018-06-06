import React from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP, Colors } from '../../helpers';

export const ColoredCard = ({ backgroundColor, title, children }) => {
	return (
		<View
			style={{
				backgroundColor: backgroundColor,
				marginHorizontal: widthPercentageToDP('4%'),
				marginTop: widthPercentageToDP('2%')
			}}
		>
			<Text
				style={{
					color: Colors.BasicTitleColor,
					paddingLeft: widthPercentageToDP('3%'),
					paddingTop: widthPercentageToDP('3%')
				}}
			>
				{title}
			</Text>
			<View style={{ paddingLeft: widthPercentageToDP('5%') }}>{children}</View>
		</View>
	);
};
