import React from 'react';
import { Text, View } from 'react-native';
import { Colors, widthPercentageToDP } from '../../helpers';

export const TabCardData = ({ data, fontSize }) => {
	return (
		<View style={{ backgroundColor: Colors.CardBackgroundColor, flex: 1 }}>
			<Text
				style={{
					fontSize: fontSize,
					color: Colors.BasicTitleColor,
					paddingLeft: widthPercentageToDP('3%'),
					paddingTop: widthPercentageToDP('2%')
				}}
			>
				{'1.' + data[0].firstShops}
			</Text>
			<View style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('6%') }}>
				<Text style={{ fontSize: fontSize, color: Colors.BasicTitleColor }}>{data[0].value}</Text>
				<Text
					style={{
						fontSize: widthPercentageToDP('1.5%'),
						color: Colors.BasicTitleColor,
						textAlignVertical: 'bottom'
					}}
				>
					TL
				</Text>
			</View>
			<Text
				style={{
					fontSize: fontSize,
					color: Colors.BasicTitleColor,
					paddingLeft: widthPercentageToDP('3%'),
					paddingTop: widthPercentageToDP('2%')
				}}
			>
				{'2. ' + data[1].firstShops}
			</Text>
			<View style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('6%') }}>
				<Text style={{ fontSize: fontSize, color: Colors.BasicTitleColor }}>{data[1].value}</Text>
				<Text
					style={{
						fontSize: widthPercentageToDP('1.5%'),
						color: Colors.BasicTitleColor,
						textAlignVertical: 'bottom'
					}}
				>
					TL
				</Text>
			</View>
			<Text
				style={{
					fontSize: fontSize,
					color: Colors.BasicTitleColor,
					paddingLeft: widthPercentageToDP('3%'),
					paddingTop: widthPercentageToDP('2%')
				}}
			>
				{'3. ' + data[2].firstShops}
			</Text>
			<View style={{ flexDirection: 'row', paddingLeft: widthPercentageToDP('6%') }}>
				<Text style={{ fontSize: fontSize, color: Colors.BasicTitleColor }}>{data[2].value}</Text>
				<Text
					style={{
						fontSize: widthPercentageToDP('1.5%'),
						color: Colors.BasicTitleColor,
						textAlignVertical: 'bottom'
					}}
				>
					TL
				</Text>
			</View>
		</View>
	);
};
