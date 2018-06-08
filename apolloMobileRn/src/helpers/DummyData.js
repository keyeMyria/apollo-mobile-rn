import { localizedText } from './Localization/Localization';

export const CockpitData = [
	{
		icon: require('../../assets/yenimüşteri.png'),
		title: localizedText.NumberOfNewMembers,
		value: '123123',
		graphImage: require('../../assets/1.jpg')
	},
	{
		icon: require('../../assets/işlemyaptıranmüşteri.png'),
		title: localizedText.NumberOfMembersWhoTakeAction,
		value: '20695',
		graphImage: require('../../assets/2.jpg')
	},

	{
		icon: require('../../assets/işletilenfaturasayısı.png'),
		title: localizedText.NumberOfReceipts,
		value: '234234',
		graphImage: require('../../assets/2.jpg')
	},
	{
		icon: require('../../assets/işletilenfaturalarıntplamı.png'),
		title: localizedText.TotalRecordedReceiptAmount,
		value: '12332',
		graphImage: require('../../assets/1.jpg')
	},
	{
		icon: require('../../assets/kuponadedi.png'),
		title: localizedText.NumberOfCoupons,
		value: '2423',
		graphImage: require('../../assets/2.jpg')
	},
	{
		icon: require('../../assets/kuponalanmüşteri.png'),
		title: localizedText.NumberOfMembersWithCoupon,
		value: '20695',
		graphImage: require('../../assets/1.jpg')
	}
];
