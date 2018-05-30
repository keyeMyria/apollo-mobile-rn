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
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Page } from './../components/common';
import { Colors, Icons, Paddings, widthPercentageToDP, Margins, Images } from '.././helpers';
// import LinearGradient from 'react-native-linear-gradient';
import { Button, TextInput, Checkbox } from 'react-native-paper';

class LoginPage extends Component {
	username = 'omg.erkan';
	password = 'erkan123';
	mallCode = 'portus';

	constructor(props) {
		super(props);
		this.state = {
			rememberMe: false
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
				saveUserCredentials();
			}
			this.props.navigation.navigate('app');
		}
	}

	async saveUserCredentials() {
		await AsyncStorage.multiSet([
			['username', this.username],
			['password', this.password],
			['mallCode', this.mallCode]
		]);
	}

	render() {
		if (this.props.tokenError) {
			Alert.alert('Bir hata oluştu');
		}
		const { rememberMe } = this.state;
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
					onPress={() => this.logUserIn(this.username, this.password, this.mallCode, rememberMe)}
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

	logUserIn(username, password, mallCode, rememberMe) {
		this.props.fetchToken(username, password, mallCode);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
		// marginBottom:Margins.
		// justifyContent: 'center',
		// alignItems: 'center'
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
