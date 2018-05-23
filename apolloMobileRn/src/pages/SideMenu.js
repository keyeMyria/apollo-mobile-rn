import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { Paddings } from '../helpers/Constants';
import { Margins } from '../helpers/Constants';
import { widthPercentageToDP } from '../helpers/Responsive';
import { TouchableRipple } from 'react-native-paper';
import { DrawerItems } from '../components/drawer/DrawerItems';
import { Images } from '../helpers/Images';
import { Icons } from '../helpers/Icons';
import { Colors } from './../helpers/Colors';

var imageWidth = widthPercentageToDP('3%');
var imageHeight = widthPercentageToDP('5%');

class SideMenu extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};
	state = {
		active: 'First Item'
	};
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'column' }}>
				<View style={{ flex: 1 }}>
					<Image source={Images.DrawerPicIcon} />
				</View>
				<View style={{ backgroundColor: Colors.AppBackgroundColor }}>
					<DrawerItems textTitle="Kokpit" />

					<DrawerItems textTitle="Yönetici Özet" />

					<DrawerItems textTitle="Kampanya Detay" />

					<DrawerItems textTitle="En İyiler" />

					<DrawerItems textTitle="Hediye Stok" />

					<DrawerItems textTitle="Kıyasla" />

					<DrawerItems textTitle="Müşteri Değer Piramidi" />

					<DrawerItems textTitle="E Mail Raporu İste" />

					<DrawerItems textTitle="Oturumu Kapat" />
				</View>
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
