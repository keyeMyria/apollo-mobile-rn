import React, { Component } from 'react';
import { View, Animated, Easing, Button, Text } from 'react-native';
import { _ } from 'lodash';
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

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPath = Animated.createAnimatedComponent(Path);

let pathData = '';
class PieChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animValue: new Animated.Value(0),
			pathData: ''
		};
	}
	slices = [
		{ percent: 0.1, color: 'Coral' },
		{ percent: 0.65, color: 'CornflowerBlue' },
		{ percent: 0.2, color: '#00ab6b' }
	];
	componentDidMount() {
		let cumulativePercent = 0;

		this.slices.forEach(slice => {
			var [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);

			cumulativePercent += slice.percent;

			var [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);

			var largeArcFlag = slice.percent > 0.5 ? 1 : 0;

			pathData = [`M ${startX} ${startY}`, `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, `L 0 0`].join(' ');
		});
		this.setState({ pathData: pathData });
	}

	getCoordinatesForPercent(percent) {
		const x = Math.cos(2 * Math.PI * percent) * 50;
		const y = Math.sin(2 * Math.PI * percent) * 50;
		return [x, y];
	}

	render() {
		console.log('pathData', this.state.pathData);
		return (
			<AnimatedSvg height="300" width="300" fill="red">
				{/* <Circle cx="150" cy="150" r="50" fill="blue" /> */}

				<AnimatedPath fill="none" strokeWidth="2" stroke="red" d={this.state.pathData} />
				{/* <AnimatedPath fill="none" strokeWidth="20" stroke="yellow" d="M 100,150 A 50 50, 0, 0 0, 200 150" /> */}

				{/* <Path fill="none" stroke="green" d="M 60,60 A 50 50, 0, 1 1, 100 60 " />
				<Path fill="none" stroke="blue" d="M 60,60 A 50 50, 0, 0 0, 100 60 " /> */}
			</AnimatedSvg>
		);
	}
}

export default PieChart;
