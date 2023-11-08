import { convertToNumber } from "./arabNumber";

it('test Error', () => {
    expect(convertToNumber('IIX')).toEqual({error: true, message: 'Not a valid roman number'})
    expect(convertToNumber('CCCC')).toEqual({error: true, message: 'Not a valid roman number'})
})

it('test some roman number', () => {
    expect(convertToNumber('XIX')).toEqual({data: 19})
    expect(convertToNumber('MMXXIII')).toEqual({data: 2023})
})