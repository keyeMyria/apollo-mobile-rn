import { widthPercentageToDP } from './Responsive';

const FontSizes = {
	TitleFontSize: widthPercentageToDP('4%'),
	SubTitleFontSize: widthPercentageToDP('3%'),
	DetailFontSize: widthPercentageToDP('2%'),
	ButtonFontSize: widthPercentageToDP('3%')
};

const Margins = {
	CardMargin: widthPercentageToDP('3%'),
	ListItemBottomMargin: widthPercentageToDP('2%'),
	ButtonTopMargin: widthPercentageToDP('5%'),
	DateItemBottomMargin: widthPercentageToDP('5%'),
	DateItemHorizontalMargin: widthPercentageToDP('5%'),
	CockpitScreenItemsHorizontalMargin: widthPercentageToDP('5%'),
	CockpitScreenItemsBottomMargin: widthPercentageToDP('5%'),
	LoginItemsBottomMargin: widthPercentageToDP('5%')
};

const Paddings = {
	PageHorizontalPadding: widthPercentageToDP('3%'),
	PageVerticalPadding: widthPercentageToDP('3%'),
	ListItemHorizontalPadding: widthPercentageToDP('2%'),
	ListItemVerticalPadding: widthPercentageToDP('2%'),
	ButtonHorizontalPadding: widthPercentageToDP('2%'),
	ButtonVerticalPadding: widthPercentageToDP('1%')
};

const Sizes = {
	DrawerIconWidth: widthPercentageToDP('5%'),
	DrawerIconHeight: widthPercentageToDP('5%'),
	DrawerWidth: widthPercentageToDP('80%')
};

export { FontSizes, Margins, Paddings, Sizes };
