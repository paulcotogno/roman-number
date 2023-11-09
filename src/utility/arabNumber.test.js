import { convertToNumber } from "./arabNumber";

it('Test number', () => {
    expect(convertToNumber(89)).toEqual({error: true, message: 'Not a valid roman number'})
    expect(convertToNumber(0)).toEqual({error: true, message: 'Not a valid roman number'})
})

it('Test string but non-roman number', () => {
    expect(convertToNumber('hello')).toEqual({error: true, message: 'Not a valid roman number'})
    expect(convertToNumber('hi')).toEqual({error: true, message: 'Not a valid roman number'})
})

it('Test wrong roman number', () => {
    expect(convertToNumber('IIX')).toEqual({error: true, message: 'Not a valid roman number'})
    expect(convertToNumber('CCCC')).toEqual({error: true, message: 'Not a valid roman number'})
})

it('Test different roman number', () => {
    expect(convertToNumber('XIX')).toEqual({data: 19})
    expect(convertToNumber('MMXXIII')).toEqual({data: 2023})
})