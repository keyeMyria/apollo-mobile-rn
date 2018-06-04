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
import { localizedText } from './../helpers/Localization/Localization';

const BestOfTabPages = localizedTexts => {
	return createMaterialTopTabNavigator(
		{
			bestShops: {
				screen: BestShopsPage,
				navigationOptions: {
					title: localizedTexts.STORE
				}
			},
			bestSectors: {
				screen: BestSectorsPage,
				navigationOptions: {
					title: localizedTexts.SECTOR
				}
			},
			bestCities: {
				screen: BestCitiesPage,
				navigationOptions: {
					title: localizedTexts.CITY
				}
			},
			bestCounties: {
				screen: BestCountiesPage,
				navigationOptions: {
					title: localizedTexts.COUNTY
				}
			},
			bestDistricts: {
				screen: BestDistrictsPage,
				navigationOptions: {
					title: localizedTexts.DISTRICT
				}
			},
			bestGenders: {
				screen: BestGendersPage,
				navigationOptions: {
					title: localizedTexts.GENDER
				}
			},
			bestDays: {
				screen: BestDaysPage,
				navigationOptions: {
					title: localizedTexts.DAY
				}
			},
			bestHours: {
				screen: BestHoursPage,
				navigationOptions: {
					title: localizedTexts.HOUR
				}
			},
			bestAgeIntervals: {
				screen: BestAgeIntervalsPage,
				navigationOptions: {
					title: localizedTexts.AGEINTERVAL
				}
			},
			bestVisitFrequencies: {
				screen: BestVisitFrequenciesPage,
				navigationOptions: {
					title: localizedTexts.VISITFREQUENCY
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
};

export const BestOfPage = ({ navigation }) => {
	var BestOfTabPageComponent = BestOfTabPages(localizedText);
	return (
		<Page navigation={navigation}>
			<BestOfTabPageComponent />
		</Page>
	);
};
