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
// import { Icons } from '../helpers/Icons';
import { Colors } from './../helpers/Colors';
import Icons from 'react-native-vector-icons/MaterialIcons';

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
				<View style={{ backgroundColor: Colors.AppBackgroundColor, flex: 3 }}>
					<DrawerItems textTitle="Kokpit" iconName="restore" />

					<DrawerItems textTitle="Yönetici Özet" iconName="gps-fixed" />

					<DrawerItems textTitle="Kampanya Detay" iconName="local-play" />

					<DrawerItems textTitle="En İyiler" iconName="thumb-up" />

					<DrawerItems textTitle="Hediye Stok" iconName="redeem" />

					<DrawerItems textTitle="Kıyasla" iconName="swap-horiz" />

					<DrawerItems textTitle="Müşteri Değer Piramidi" iconName="landscape" />

					<DrawerItems textTitle="E Mail Raporu İste" iconName="email" />

					<DrawerItems textTitle="Oturumu Kapat" iconName="exit-to-app" />
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
