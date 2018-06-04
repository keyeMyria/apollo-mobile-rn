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

const BestOfTabPages = createMaterialTopTabNavigator(
	{
		bestAgeIntervals: {
			screen: BestAgeIntervalsPage
		},
		bestCities: {
			screen: BestCitiesPage
		},
		bestCounties: {
			screen: BestCountiesPage
		},
		bestDays: {
			screen: BestDaysPage
		},
		bestDistricts: {
			screen: BestDistrictsPage
		},
		bestGenders: {
			screen: BestGendersPage
		},
		bestHours: {
			screen: BestHoursPage
		},
		bestSectors: {
			screen: BestSectorsPage
		},
		bestShops: {
			screen: BestShopsPage
		},
		bestVisitFrequencies: {
			screen: BestVisitFrequenciesPage
		}
	},
	{
		tabBarOptions: {
			scrollEnabled: true
		}
	}
);

export const BestOfPage = () => {
	return (
		<Page>
			<BestOfTabPages />
		</Page>
	);
};
