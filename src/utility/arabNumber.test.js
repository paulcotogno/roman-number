import { convertToNumber } from "./arabNumber";

it('test Error', () => {
    expect(convertToNumber('IIX')).toEqual('Not a valid roman number')
    expect(convertToNumber('CCCC')).toEqual('Not a valid roman number')
})

it('test some roman number', () => {
    expect(convertToNumber('XIX')).toEqual(19)
    expect(convertToNumber('MMXXIII')).toEqual(2023)
})