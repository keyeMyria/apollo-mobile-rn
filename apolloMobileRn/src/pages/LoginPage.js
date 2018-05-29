import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Page } from './../components/common/Page';
import { Colors } from '../helpers/Colors';
import { Icons } from '../helpers/Icons';
import { Button } from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';
import { Paddings, Margins } from './../helpers/Constants';
import { widthPercentageToDP } from '../helpers/Responsive';

class LoginPage extends Component {
	renderLoading() {
		if (this.props.isTokenLoading) {
			return <ActivityIndicator size={30} color="black" />;
		}
		return null;
	}

	componentWillReceiveProps(newProps) {
		if (newProps.token !== this.props.token) {
			this.props.navigation.navigate('app');
		}
	}

	render() {
		if (this.props.tokenError) {
			Alert.alert('Bir hata oluştu');
		}
		return (
			<LinearGradient
				colors={[
					'#957FEE',
					'#A67DE3',
					'#BC7BD9',
					'#C07BD4',
					'#CD7ACC',
					'#D578C9',
					'#E278C2',
					'#EB76BC',
					'#EF5FA7',
					'#F25FA6'
				]}
				style={styles.container}
			>
				<Image source={Icons.LıstItemRightIcon} style={{ width: 30, height: 30, alignSelf: 'center' }} />
				<View style={styles.welcome}>
					<TextInput placeholder="Username" placeholderTextColor="#4a5178" />
					<TextInput placeholder="Password" placeholderTextColor="#4a5178" />
				</View>
				<Button
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: Margins.ButtonTopMargin,
						backgroundColor: Colors.DrawerItemRippleColor
					}}
					raised
					color="#4a5178"
					onPress={() => this.props.fetchToken('omg.erkan', 'erkan123', 'portus')}
				>
					Login
				</Button>
				{this.renderLoading()}
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		alignSelf: 'stretch',
		marginHorizontal: 10,
		paddingVertical: Paddings.PageVerticalPadding
	},
	button: {
		// textAlign: 'center',
		// color: '#333333',
		// marginBottom: 5
		// justifyContent: 'center',
		alignItems: 'stretch',
		width: widthPercentageToDP('50'),
		marginRight: widthPercentageToDP('25%'),
		marginLeft: widthPercentageToDP('25%')
	}
});

const mapStateToProps = state => {
	const { isTokenLoading, token, tokenError } = state.token;
	return { isTokenLoading, token, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(LoginPage);
