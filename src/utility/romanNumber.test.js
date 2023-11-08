import { convertToRoman } from './romanNumber'

it('test error number', () => {
    expect(convertToRoman(0)).toEqual('Number too low [Valid Number "1 - 10000"]')
    expect(convertToRoman(32000)).toEqual('Number too high [Valid Number "1 - 10000"]')
})

it('test not a number', () => {
    expect(convertToRoman('string')).toEqual('Not a number')
    expect(convertToRoman()).toEqual('Not a number')
})

it('test random number', () => {
    expect(convertToRoman(7)).toEqual('VII')
    expect(convertToRoman(338)).toEqual('CCCXXXVIII')
    expect(convertToRoman(6923)).toEqual('MMMMMMCMXXIII')
})