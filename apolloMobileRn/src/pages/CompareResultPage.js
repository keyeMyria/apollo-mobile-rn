import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GeneralSummary from './../components/comparison/compareResult/GeneralSummary';
import ShopTotalSpending from './../components/comparison/compareResult/ShopTotalSpending';
import ShopNumberOfMember from './../components/comparison/compareResult/ShopNumberOfMember';
import CountyTotalSpending from './../components/comparison/compareResult/CountyTotalSpending';
import { Colors, widthPercentageToDP } from '../helpers';
import DistrictTotalSpending from './../components/comparison/compareResult/DistrictTotalSpending';

class CompareResultPage extends Component {
	render() {
		return (
			<ScrollView>
				<View style={{ alignItems: 'center', backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
					<GeneralSummary />
					<ShopTotalSpending />
					<ShopNumberOfMember />
					<CountyTotalSpending />
					<DistrictTotalSpending />
				</View>
			</ScrollView>
		);
	}
}
export default CompareResultPage;
