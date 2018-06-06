import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchCampaigns } from 'apollo-rn-redux-helper/src/actions';
import { Page } from '../components/common';
import { widthPercentageToDP, Colors, heightPercentageToDP } from '../helpers';
import GiftStockTabPage from './../components/giftStock/GiftStockTabPage';
import { createMaterialTopTabNavigator } from 'react-navigation';
import BestCitiesPage from './bestOfTabPages/BestCitiesPage';

class GiftStockPage extends Component {
	state = {
		campaignTabs: null
	};

	componentDidMount() {
		this.props.fetchCampaigns('portus', true);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.campaign && nextProps.campaign !== this.props.campaign) {
			const screens = {};
			nextProps.campaign.map((item, index) => {
				var comp = () => {
					return <GiftStockTabPage campaign={item} />;
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
		if (this.props.campaign && this.state.campaignTabs) {
			return <this.state.campaignTabs />;
		}
		if (this.props.error) {
			return (
				<View>
					<Text>Kampanyalar yüklenirken bir hata oluştu.</Text>
				</View>
			);
		}
		return <ActivityIndicator size={widthPercentageToDP('5%')} color={Colors.AccentColor} />;
	}

	render() {
		console.log(this.props);
		return <Page navigation={this.props.navigation}>{this.renderPage()}</Page>;
	}
}

const mapStateToProps = state => {
	const { isLoading, campaign, error } = state.campaign;
	return { isLoading, campaign, error };
};

export default connect(mapStateToProps, { fetchCampaigns })(GiftStockPage);
