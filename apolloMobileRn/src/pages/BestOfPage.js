import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getPing, fetchReportTop } from 'apollo-rn-redux-helper/src/actions';
import LinearGradient from 'react-native-linear-gradient';
import { createMaterialTopTabNavigator } from 'react-navigation';
import BestShopsPage from './bestOfTabPages/BestShopsPage';
import BestCitiesPage from './bestOfTabPages/BestCitiesPage';
import BestCountiesPage from './bestOfTabPages/BestCountiesPage';
import { Page } from '../components/common';
import BestAgeIntervalsPage from './bestOfTabPages/BestAgeIntervalsPage';
import BestDaysPage from './bestOfTabPages/BestDaysPage';
import BestDistrictsPage from './bestOfTabPages/BestDistrictsPage';
import BestGendersPage from './bestOfTabPages/BestGendersPage';
import BestHoursPage from './bestOfTabPages/BestHoursPage';
import BestSectorsPage from './bestOfTabPages/BestSectorsPage';
import BestVisitFrequenciesPage from './bestOfTabPages/BestVisitFrequenciesPage';
import { heightPercentageToDP, Colors, widthPercentageToDP } from '../helpers';
import { localizedText } from './../helpers/Localization';

const BestOfTabPages = createMaterialTopTabNavigator(
	{
		bestShops: {
			screen: BestShopsPage,
			navigationOptions: {
				title: localizedText.shops
			}
		},
		bestSectors: {
			screen: BestSectorsPage,
			navigationOptions: {
				title: localizedText.sectors
			}
		},
		bestCities: {
			screen: BestCitiesPage,
			navigationOptions: {
				title: localizedText.cities
			}
		},
		bestCounties: {
			screen: BestCountiesPage,
			navigationOptions: {
				title: localizedText.counties
			}
		},
		bestDistricts: {
			screen: BestDistrictsPage,
			navigationOptions: {
				title: localizedText.districts
			}
		},
		bestGenders: {
			screen: BestGendersPage,
			navigationOptions: {
				title: localizedText.genders
			}
		},
		bestDays: {
			screen: BestDaysPage,
			navigationOptions: {
				title: localizedText.days
			}
		},
		bestHours: {
			screen: BestHoursPage,
			navigationOptions: {
				title: localizedText.hours
			}
		},
		bestAgeIntervals: {
			screen: BestAgeIntervalsPage,
			navigationOptions: {
				title: localizedText.ageInterval
			}
		},
		bestVisitFrequencies: {
			screen: BestVisitFrequenciesPage,
			navigationOptions: {
				title: localizedText.visitFrequencies
			}
		}
	},
	{
		tabBarOptions: {
			scrollEnabled: true,
			tabStyle: { height: heightPercentageToDP('7%') },
			style: { backgroundColor: Colors.PrimaryColor },
			upperCaseLabel: false,
			activeTintColor: 'white',
			indicatorStyle: { backgroundColor: 'white' },
			labelStyle: { fontSize: widthPercentageToDP('3%') }
		}
	}
);

export const BestOfPage = ({ navigation }) => {
	return (
		<Page navigation={navigation}>
			<BestOfTabPages />
		</Page>
	);
};
