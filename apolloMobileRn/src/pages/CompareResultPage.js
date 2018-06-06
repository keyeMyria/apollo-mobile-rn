import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GeneralSummaryItems from '../components/comparison/compareResult/generalSummary/GeneralSummaryItems';
import GeneralSummary from './../components/comparison/compareResult/generalSummary/GeneralSummary';
class CompareResultPage extends Component {
	render() {
		return <GeneralSummary />;
	}
}
export default CompareResultPage;
