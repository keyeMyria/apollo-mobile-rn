import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaignSummary } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../helpers';
import CampaignTabPage from './../components/campaign/CampaignTabPage';
import { createMaterialTopTabNavigator } from 'react-navigation';
import BestCitiesPage from './bestOfTabPages/BestCitiesPage';

class CampaignDetailsPage extends Component {
	state = {
		campaignTabs: null
	};

	componentDidMount() {
		this.props.fetchCampaignSummary('portus', new Date(2018, 6, 1), new Date(2018, 6, 6));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.campaignSummary && nextProps.campaignSummary !== this.props.campaignSummary) {
			const screens = {};
			nextProps.campaignSummary.map((item, index) => {
				var comp = () => {
					return <CampaignTabPage campaignDetails={item} />;
				};
				screens[index] = { screen: comp, navigationOptions: { title: item.Name } };
			});
			this.setState({
				campaignTabs: createMaterialTopTabNavigator(screens, {
					tabBarOptions: {
						scrollEnabled: true,
						tabStyle: { height: heightPercentageToDP('7%') },
						style: { backgroundColor: Colors.PrimaryColor },
						upperCaseLabel: false,
						activeTintColor: 'white',
						indicatorStyle: { backgroundColor: 'white' },
						labelStyle: { fontSize: widthPercentageToDP('3%') }
					}
				})
			});
		}
	}

	renderPage() {
		if (this.props.campaignSummary && this.state.campaignTabs) {
			return <this.state.campaignTabs />;
		}
		if (this.props.campaignSummaryError) {
			return (
				<View>
					<Text>Kampanyalar yüklenirken bir hata oluştu.</Text>
				</View>
			);
		}
		return <ActivityIndicator size={widthPercentageToDP('5%')} color={Colors.AccentColor} />;
	}

	render() {
		return <Page navigation={this.props.navigation}>{this.renderPage()}</Page>;
	}
}

const mapStateToProps = state => {
	const { isCampaignSummaryLoading, campaignSummary, campaignSummaryError } = state.report;
	return { isCampaignSummaryLoading, campaignSummary, campaignSummaryError };
};

export default connect(mapStateToProps, { fetchCampaignSummary })(CampaignDetailsPage);
