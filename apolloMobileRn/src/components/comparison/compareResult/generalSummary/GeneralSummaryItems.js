import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { localizedText } from './../../../../helpers/Localization/Localization';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors, widthPercentageToDP } from '../../../../helpers';

class GeneralSummaryItems extends Component {
	render() {
		const { title, firstCampaign, secondCampaign, percentage } = this.props;
		return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',

					flex: 1
				}}
			>
				<Text style={{ color: Colors.SecondaryTitleColor }}>{title} </Text>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
					<View
						style={{
							flexDirection: 'row',
							marginRight: widthPercentageToDP('5%'),
							paddingRight: widthPercentageToDP('10%')
						}}
					>
						<Text style={{ color: Colors.SecondaryTitleColor }}>{firstCampaign}</Text>
						<Icons name="trending-flat" color={Colors.SecondaryTitleColor} />
						<Text
							style={{
								color: Colors.SecondaryTitleColor,
								fontSize: widthPercentageToDP('2%')
							}}
						>
							{percentage}
						</Text>
					</View>
					<Text style={{ color: Colors.SecondaryTitleColor, paddingRight: widthPercentageToDP('10%') }}>
						{secondCampaign}
					</Text>
				</View>
			</View>
		);
	}
}
export default GeneralSummaryItems;
