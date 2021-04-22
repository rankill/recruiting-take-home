import convertToEnglish from '@/services/converter/convertToEnglish';

describe('convertToEnglish', () => {
  it('Convert number to words - English', () => {
    expect(convertToEnglish(0)).toBe('zero');
    expect(convertToEnglish(10)).toBe('ten');
    expect(convertToEnglish(11)).toBe('eleven');
    expect(convertToEnglish(55)).toBe('fifty-five');
    expect(convertToEnglish(123)).toBe('one hundred and twenty-three');
    expect(convertToEnglish(1234)).toBe(
      'one thousand two hundred and thirty-four'
    );
    expect(convertToEnglish(85000)).toBe('eighty-five thousand');
  });
});
