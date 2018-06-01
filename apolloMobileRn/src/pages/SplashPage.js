import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image, Dimensions, ImageBackground, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { Page } from '../components/common';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Colors, Images, USERNAME, PASSWORD, MALLCODE } from '../helpers';

const { width, height } = Dimensions.get('window');
const animationDelay = 4000;

class SplashPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animateValue: new Animated.Value(0),
			isAnimationFinish: false,
			hasCredentialInfo: null
		};
	}

	animateLogo() {
		this.state.animateValue.setValue(0);
		Animated.timing(this.state.animateValue, {
			toValue: 1,
			duration: 6000,
			easing: Easing.linear
		}).start(() => this.animateLogo());
	}

	startAnimationDelay() {
		setTimeout(() => {
			this.setState({ isAnimationFinish: true });
		}, animationDelay);
	}

	async componentDidMount() {
		this.startAnimationDelay();
		this.animateLogo();

		var credentialInfo = await AsyncStorage.multiGet([USERNAME, PASSWORD, MALLCODE]);
		if (credentialInfo != null && credentialInfo.length === 3) {
			var username = credentialInfo[0][1];
			var password = credentialInfo[1][1];
			var mallCode = credentialInfo[2][1];

			if (mallCode && password && mallCode) {
				console.log(username, password, mallCode);
				this.props.fetchToken(username, password, mallCode);
			} else {
				this.setState({ hasCredentialInfo: false });
			}
		} else {
			this.setState({ hasCredentialInfo: false });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.isAnimationFinish) {
			if (this.props.token !== null) {
				this.props.navigation.navigate('app');
			} else if (this.props.tokenError) {
				this.props.navigation.navigate('login');
			} else if (!this.state.hasCredentialInfo) {
				this.props.navigation.navigate('login');
			}
		}
	}

	render() {
		const scaleValue = this.state.animateValue.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: [1, 2, 1, 2, 1]
		});

		const rotationValue = this.state.animateValue.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: ['0deg', '40deg', '0deg', '-40deg', '0deg']
		});

		return (
			<ImageBackground
				style={{
					flex: 1,
					backgroundColor: Colors.AppBackgroundColor,
					justifyContent: 'center',
					alignItems: 'center'
				}}
				source={Images.SplashBackground}
			>
				<Animated.Image
					source={Images.Logo}
					style={{ width: width, transform: [{ scale: scaleValue }, { rotate: rotationValue }] }}
					resizeMode="contain"
				/>
			</ImageBackground>
		);
	}
}

const mapStateToProps = state => {
	const { isTokenLoading, token, tokenError } = state.token;
	return { isTokenLoading, token, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(SplashPage);
