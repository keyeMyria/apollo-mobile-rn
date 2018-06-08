import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { localizedText } from '../../../helpers/Localization/Localization';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Colors, widthPercentageToDP } from '../../../helpers';

class CompareResultDataRow extends Component {
	render() {
		const { title, firstCampaign, secondCampaign, percentage, fontSize } = this.props;
		return (
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingLeft: widthPercentageToDP('2%'),
					flex: 1
				}}
			>
				<Text style={{ color: Colors.SecondaryTitleColor }}>{title} </Text>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
					<View
						style={{
							flexDirection: 'row',
							paddingRight: widthPercentageToDP('20%')
						}}
					>
						<Text style={{ color: Colors.SecondaryTitleColor, fontSize: fontSize }}>{firstCampaign}</Text>
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
					<Text style={{ color: Colors.SecondaryTitleColor, paddingRight: widthPercentageToDP('4%') }}>
						{secondCampaign}
					</Text>
				</View>
			</View>
		);
	}
}
export default CompareResultDataRow;
