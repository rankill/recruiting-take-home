import { ConverterService } from '@/services/converter/converterService';
import { Languages } from '@/constants';
import convertToEnglish from '@/services/converter/convertToEnglish';

describe('ConverterService', () => {
  const converterService: ConverterService = new ConverterService();

  it('Run converter english (selected language) method and capitalize', () => {
    expect(converterService.convertNumber(55)).toBe('Fifty-five');
    expect(converterService.convertNumber(123)).toBe(
      'One hundred and twenty-three'
    );
  });

  it('The default language must be english', () => {
    expect(converterService.selectedLanguage).toBe(Languages.English);
  });

  it('Update the language to Roman', () => {
    // Hack to simulate we are selecting Roman language (Currently we only support english lan)
    const romanLan = 'Roman' as Languages;
    converterService.selectedLanguage = romanLan;
    expect(converterService.selectedLanguage).toBe(romanLan);
  });

  it('Throw error if input is not a number', () => {
    expect(() => converterService.convertNumber(null)).toThrowError(
      'A valid number must be passed: null is not a number'
    );
  });
});
