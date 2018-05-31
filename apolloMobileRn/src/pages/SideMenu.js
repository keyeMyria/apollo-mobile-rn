import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { DrawerItems } from '../components/drawer/DrawerItems';
import { Colors, Images, Paddings, Sizes, Margins, widthPercentageToDP, heightPercentageToDP } from './../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { logOut } from 'apollo-rn-redux-helper/src/actions';
import { connect } from 'react-redux';

var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

class SideMenu extends Component {
	navigateToScreen(route) {
		setTimeout(() => {
			this.props.navigation.navigate(route);
		}, 150);
	}

	state = {
		active: 'First Item'
	};

	logUserOut() {
		console.log('çıkış yapılıyor');
		AsyncStorage.multiRemove(['username', 'password', 'mallCode'])
			.then(() => {
				logOut();
				// this.props.navigation.navigate('login');
				console.log('silindi');
			})
			.catch(err => console.log('silinemedi : ', err));
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: Colors.AppBackgroundColor, flexDirection: 'column' }}>
				<Image
					source={Images.DrawerImage}
					style={{
						width: Sizes.DrawerWidth,
						height: Sizes.DrawerWidth * 0.5628
					}}
					resizeMode="contain"
				/>
				<ScrollView showsVerticalScrollIndicator={false}>
					<DrawerItems
						textTitle="Kokpit"
						iconName="restore"
						onPress={() => {
							this.navigateToScreen('cockpit');
						}}
					/>

					<DrawerItems
						textTitle="Yönetici Özet"
						iconName="gps-fixed"
						onPress={() => {
							this.navigateToScreen('managerSummary');
						}}
					/>

					<DrawerItems
						textTitle="Kampanya Detay"
						iconName="local-play"
						onPress={() => {
							this.navigateToScreen('campaignDetails');
						}}
					/>

					<DrawerItems
						textTitle="En İyiler"
						iconName="thumb-up"
						onPress={() => {
							this.navigateToScreen('bestOf');
						}}
					/>

					<DrawerItems
						textTitle="Hediye Stok"
						iconName="redeem"
						onPress={() => {
							this.navigateToScreen('giftStock');
						}}
					/>

					<DrawerItems
						textTitle="Kıyasla"
						iconName="swap-horiz"
						onPress={() => {
							this.navigateToScreen('comparison');
						}}
					/>

					<DrawerItems
						textTitle="Müşteri Değer Piramidi"
						iconName="landscape"
						onPress={() => {
							this.navigateToScreen('customerValuePyramid');
						}}
					/>

					<DrawerItems
						textTitle="E-Posta Raporu İste"
						iconName="email"
						onPress={() => {
							this.navigateToScreen('eMailReport');
						}}
					/>

					<DrawerItems
						textTitle="Oturumu Kapat"
						iconName="exit-to-app"
						onPress={() => {
							this.logUserOut();
						}}
					/>
				</ScrollView>
			</View>
		);
	}
}

SideMenu.propTypes = {
	navigation: PropTypes.object
};
const styles = StyleSheet.create({
	container: {}
});

export default SideMenu;
