import convertToEnglish from './convertToEnglish';
import { Languages } from '@/constants';

export class ConverterService {
  _selectedLanguage = Languages.English;
  constructor(type: Languages = Languages.English) {
    this._selectedLanguage = type;
  }

  convertNumber(value: number | null): string {
    if (typeof value !== 'number') {
      throw new Error(
        `A valid number must be passed: ${value} is not a number`
      );
    }

    let convertedNumber = '';
    switch (this._selectedLanguage) {
      // Here we will add all the languages that we want to convert the number to
      case Languages.English:
        convertedNumber = convertToEnglish(value);
        break;
    }

    return this.capitalizeNumber(convertedNumber);
  }

  capitalizeNumber(numberInWords: string): string {
    return numberInWords.charAt(0).toUpperCase() + numberInWords.slice(1);
  }

  get selectedLanguage(): Languages {
    return this._selectedLanguage;
  }

  set selectedLanguage(lan: Languages) {
    this._selectedLanguage = lan;
  }
}
