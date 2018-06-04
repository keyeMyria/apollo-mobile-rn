const tr = {
	ageInterval: 'Yaş aralığı',
	cities: 'Şehirler',
	counties: 'İlçeler',
	days: 'Günler',
	districts: 'Semtler',
	genders: 'Cinsiyetler',
	hours: 'Saatler',
	sectors: 'Sektörler',
	shops: 'Mağazalar',
	visitFrequencies: 'Ziyaret Frekansları'
};

const en = {
	ageInterval: 'Age Intervals',
	cities: 'Cities',
	counties: 'Counties',
	days: 'Days',
	districts: 'Districts',
	genders: 'Genders',
	hours: 'Hours',
	sectors: 'Sectors',
	shops: 'Shops',
	visitFrequencies: 'Visit Frequencies'
};

// const fr = {
// 	ageInterval: 'Age Intervals',
// 	cities: 'Cities',
// 	counties: 'Counties',
// 	days: 'Days',
// 	districts: 'Districts',
// 	genders: 'Genders',
// 	hours: 'Hours',
// 	sectors: 'Sectors',
// 	shops: 'Shops',
// 	visitFrequencies: 'Visit Frequencies'
// };

// const ru = {
// 	ageInterval: 'Age Intervals',
// 	cities: 'Cities',
// 	counties: 'Counties',
// 	days: 'Days',
// 	districts: 'Districts',
// 	genders: 'Genders',
// 	hours: 'Hours',
// 	sectors: 'Sectors',
// 	shops: 'Shops',
// 	visitFrequencies: 'Visit Frequencies'
// };
export var localizedText = en;

export const setLocalization = locale => {
	localizedText = locale === 'en' ? en : tr;
	console.log('localizedText : ', localizedText);
};
