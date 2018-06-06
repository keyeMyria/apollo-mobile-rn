import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GeneralSummary from './../components/comparison/compareResult/GeneralSummary';
import { Colors, widthPercentageToDP } from '../helpers';
class CompareResultPage extends Component {
	render() {
		return (
			<ScrollView>
				<View style={{ alignItems: 'center', backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
					<GeneralSummary />
				</View>
			</ScrollView>
		);
	}
}
export default CompareResultPage;
