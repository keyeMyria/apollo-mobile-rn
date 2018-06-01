import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
	Alert,
	Image,
	ImageBackground,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import {
	Colors,
	Icons,
	Paddings,
	widthPercentageToDP,
	Margins,
	Images,
	USERNAME,
	PASSWORD,
	MALLCODE
} from '.././helpers';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Page } from './../components/common';
import { Button, TextInput, Checkbox } from 'react-native-paper';

class LoginPage extends Component {
	username = 'omg.erkan';
	password = 'erkan123';
	mallCode = 'portus';

	constructor(props) {
		super(props);
		this.state = {
			rememberMe: true
		};
	}

	renderLoading() {
		if (this.props.isTokenLoading) {
			return <ActivityIndicator size={30} color="black" />;
		}
		return null;
	}

	componentWillReceiveProps(newProps) {
		if (newProps.token !== this.props.token) {
			if (this.state.rememberMe) {
				this.saveUserCredentials(this.props.navigation.navigate('app'), this.props.navigation.navigate('app'));
			}
		}
	}

	saveUserCredentials(successCallback, errorCallback) {
		AsyncStorage.multiSet([[USERNAME, this.username], [PASSWORD, this.password], [MALLCODE, this.mallCode]])
			.then(() => {
				if (successCallback) {
					successCallback();
				}
			})
			.catch(err => {
				console.log('multi set error :', err);
				if (errorCallback) {
					errorCallback();
				}
			});
	}

	logUserIn(username, password, mallCode) {
		this.props.fetchToken(username, password, mallCode);
	}

	render() {
		const { rememberMe } = this.state;

		console.log('login page ', this.props);
		if (this.props.tokenError) {
			Alert.alert('Bir hata oluştu');
		}

		return (
			<ImageBackground source={Images.LoginBackground} style={styles.container}>
				<Image
					source={require('../../assets/apolloLogo.png')}
					style={{ width: widthPercentageToDP('90%'), height: 100 }}
					resizeMode="contain"
				/>
				<View style={styles.welcome}>
					<TextInput
						label="AVM Kodu"
						onChangeText={text => {
							this.mallCode = text;
						}}
						style={{ backgroundColor: 'transparent' }}
						theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }}
					/>

					<TextInput
						label="Kullanıcı Adı"
						onChangeText={text => {
							this.username = text;
						}}
						style={{ backgroundColor: 'transparent' }}
						theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }}
					/>

					<TextInput
						label="Parola"
						onChangeText={text => {
							this.password = text;
						}}
						style={{ backgroundColor: 'transparent' }}
						theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }}
					/>

					<TouchableOpacity
						style={{ flexDirection: 'row' }}
						onPress={() => {
							this.setState({ rememberMe: !this.state.rememberMe });
						}}
					>
						<Checkbox checked={this.state.rememberMe} color="#4a5178" uncheckedColor="#FFFFFF" />
						<Text style={{ color: '#FFFFFF', textAlignVertical: 'center', paddingLeft: 15 }}>
							Beni Hatırla
						</Text>
					</TouchableOpacity>
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
					onPress={() => this.logUserIn(this.username, this.password, this.mallCode)}
				>
					Giriş Yap
				</Button>
				<TouchableOpacity onPress={() => {}}>
					<Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Parolamı Unuttum</Text>
				</TouchableOpacity>
				{this.renderLoading()}
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	welcome: {
		alignSelf: 'stretch',
		marginHorizontal: 10,
		paddingVertical: Paddings.PageVerticalPadding
	},
	button: {
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
