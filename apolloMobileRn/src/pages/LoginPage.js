import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
	Alert,
	Image,
	ImageBackground,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Page } from './../components/common';
import { Colors, Icons, Paddings, widthPercentageToDP, Margins, Images } from '.././helpers';
// import LinearGradient from 'react-native-linear-gradient';
import { Button, TextInput, Checkbox } from 'react-native-paper';

class LoginPage extends Component {
	state = {
		checked: false
	};
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
		const { checked } = this.state;
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
						placeholder="portus"
						theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }}
					/>

					<TextInput
						label="Kullanıcı Adı"
						placeholder="omg.abc"
						theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }}
					/>

					<TextInput label="Parola " theme={{ colors: { primary: '#FFFFFF', disabled: '#FBFBFB' } }} />

					<View style={{ flexDirection: 'row' }}>
						<Checkbox
							onPress={() => {
								this.setState({ checked: !checked });
							}}
							checked={checked}
							color="#FFFFFF"
							uncheckedColor="#FFFFFF"
						/>
						<Text style={{ color: '#FFFFFF', textAlignVertical: 'center', paddingLeft: 15 }}>
							Beni Hatırla
						</Text>
					</View>
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
