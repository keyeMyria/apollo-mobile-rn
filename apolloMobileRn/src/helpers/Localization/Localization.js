import { en } from './En';
import { fr } from './Fra';
import { ru } from './Ru';
import { tr } from './Tr';

export var localizedText = en;

export const setLocalization = locale => {
	console.log(locale);
	switch (locale) {
		case 'en':
			localizedText = en;
			break;
		case 'tr':
			localizedText = tr;
			break;
		case 'ru':
			localizedText = ru;
			break;
		case 'fr':
			localizedText = fr;
			break;
		default:
			this.localizedText = en;
	}
	console.log('localizedText : ', localizedText.STORE);
};
