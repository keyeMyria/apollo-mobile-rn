import React, { Component } from 'react';
import { View, Animated, Easing, Button, ART, Text } from 'react-native';
import Svg, {
	Circle,
	Ellipse,
	G,
	LinearGradient,
	RadialGradient,
	Line,
	Path,
	Polygon,
	Polyline,
	Rect,
	Symbol,
	Use,
	Defs,
	Stop
} from 'react-native-svg';
import { Colors } from 'react-native-paper';

const AnimatedComp = Animated.createAnimatedComponent(G);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

var dizi = [];

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animatedValues: [],
			scaleAnim: new Animated.Value(0),
			dizi: ''
		};
		// this.state.scaleAnim.addListener(newPos => {
		// 	dizi.push(newPos.value.toString());
		// 	this.refs.myPath0.setNativeProps({ width: newPos.value.toString() });
		// });
	}

	animate() {
		// this.state.animatedValues.forEach(value => {
		// 	value.setValue(0);
		// });
		// var a = [];
		// this.state.animatedValues.forEach(value => {
		// 	var toValue = Math.random() * 300;
		// 	a.push(
		// 		Animated.timing(value, {
		// 			toValue: toValue,
		// 			duration: 2000,
		// 			easing: Easing.linear
		// 		})
		// 	);
		// });

		// Animated.parallel(a).start();
		Animated.timing(this.state.scaleAnim, {
			toValue: 1,
			duration: 2000,
			easing: Easing.linear
		}).start(() => {
			// var str = dizi.join(',');
			// this.setState({ dizi: str });
		});
	}

	// componentDidMount() {
	// 	var values = [];
	// 	for (let index = 0; index < 10; index++) {
	// 		values.push(new Animated.Value(0));

	// 		values[index].addListener(newPos => {
	// 			var pathName = 'myPath' + index;
	// 			console.log(index, ' : ', newPos.value);
	// 			this.refs[pathName].setNativeProps({
	// 				width: newPos.value.toString()
	// 			});
	// 		});
	// 	}
	// 	this.setState({ animatedValues: values });
	// }
	interp(id, value) {
		return this.state.scaleAnim.interpolate({ inputRange: [0, 1], outputRange: value });
	}
	render() {
		const scaleX = this.state.scaleAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 4] });
		console.log('scaleX : ', scaleX);
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
				<AnimatedSvg height="310" width="300">
					<AnimatedComp scaleX={scaleX}>
						<Rect ref="myPath0" x="0" y="62" width="50" height="30" fill={Colors.brown300} />
					</AnimatedComp>

					{/* <AnimatedComp
						ref="myPath0"
						x="0"
						y="0"
						style={{
							matrix: [
								{
									scaleX: { scaleX }
								}
							]
						}}
						width="50"
						height="30"
						fill={Colors.amber300}
                    /> */}
					{/* <AnimatedComp
						ref="myPath0"
						scaleX={scaleX._parent._value}
						//style={{ scaleX: scaleX._parent._value }}
						x="0"
						y="31"
						width="50"
						height="30"
						fill={Colors.blue300}
                    /> */}

					{/* // <Rect ref="myPath3" x="0" y="93" width="0" height="30" fill={Colors.cyan300} />
					// <Rect ref="myPath4" x="0" y="124" width="0" height="30" fill={Colors.deepOrange300} />

					// <Rect ref="myPath5" x="0" y="155" width="0" height="30" fill={Colors.amber300} />
					// <Rect ref="myPath6" x="0" y="186" width="0" height="30" fill={Colors.amber300} />

					// <Rect ref="myPath7" x="0" y="217" width="0" height="30" fill={Colors.amber300} />
					// <Rect ref="myPath8" x="0" y="248" width="0" height="30" fill={Colors.amber300} />

					// <Rect ref="myPath9" x="0" y="279" width="0" height="30" fill={Colors.amber300} />
					// <Polyline points="0,0 0,310 300,310" fill="none" stroke="red" strokeWidth="3" /> */}
					{/* <Animated.View
						style={{ transform: [{ scaleX: scaleX }], backgroundColor: 'red', width: 100, height: 30 }}
					/> */}
				</AnimatedSvg>
				<Text style={{ color: 'white' }}>{this.state.dizi}</Text>
				<Button
					title="Start anim"
					onPress={() => {
						console.log('scaleX-button : ', scaleX);
						console.log(scaleX._parent._value);
						this.animate();
					}}
				/>
			</View>
		);
	}
}
export default BarChart;
