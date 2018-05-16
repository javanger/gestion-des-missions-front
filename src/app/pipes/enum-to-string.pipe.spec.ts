import { EnumToStringPipe } from './enum-to-string.pipe';

describe('EnumToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
