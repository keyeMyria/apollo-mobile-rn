import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { TouchableRipple, Dialog, DialogContent, DialogActions, Button } from 'react-native-paper';
import { DrawerItems } from '../components/drawer/DrawerItems';
import {
	Colors,
	Images,
	Paddings,
	Sizes,
	Margins,
	widthPercentageToDP,
	heightPercentageToDP,
	USERNAME,
	PASSWORD,
	MALLCODE
} from './../helpers';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { logOut } from 'apollo-rn-redux-helper/src/actions';
import { connect } from 'react-redux';

var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

class SideMenu extends Component {
	navigateToScreen(route) {
		this.props.navigation.navigate(route);
	}

	state = {
		active: 'First Item',
		visible: false
	};

	logUserOut() {
		console.log('çıkış yapılıyor');
		AsyncStorage.multiRemove([USERNAME, PASSWORD, MALLCODE])
			.then(() => {
				this.props.logOut();
				this.props.navigation.navigate('login');
				console.log('silindi');
			})
			.catch(err => console.log('silinemedi : ', err));
	}

	hideDialog() {
		this.setState({ visible: false });
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: Colors.AppBackgroundColor, flexDirection: 'column' }}>
				<Dialog visible={this.state.visible} onDismiss={() => this.hideDialog()}>
					<DialogContent>
						<Text>Çıkış yapılıyor devam edilsin mi?</Text>
					</DialogContent>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
						<DialogActions>
							<Button onPress={() => this.hideDialog()}>Vazgeç</Button>
						</DialogActions>
						<DialogActions>
							<Button onPress={() => this.logUserOut()}>Çıkış yap</Button>
						</DialogActions>
					</View>
				</Dialog>
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
							this.setState({ visible: true });
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
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { logOut })(SideMenu);
