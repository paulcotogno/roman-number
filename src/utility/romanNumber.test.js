import { convertToRoman } from './romanNumber'

it('test error number', () => {
    expect(convertToRoman(0)).toEqual({error: true, message: 'Number too low [Valid Number "1 - 10000"]'})
    expect(convertToRoman(32000)).toEqual({error: true, message: 'Number too high [Valid Number "1 - 10000"]'})
})

it('test not a number', () => {
    expect(convertToRoman('string')).toEqual({error: true, message: 'Not a number'})
    expect(convertToRoman()).toEqual({error: true, message: 'Not a number'})
})

it('test random number', () => {
    expect(convertToRoman(7)).toEqual({data: 'VII'})
    expect(convertToRoman(338)).toEqual({data: 'CCCXXXVIII'})
    expect(convertToRoman(6923)).toEqual({data: 'MMMMMMCMXXIII'})
})