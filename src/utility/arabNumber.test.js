import { convertToNumber } from "./arabNumber";

it('test Error', () => {
    expect(convertToNumber('IIX')).toEqual('Not a valid roman number')
})