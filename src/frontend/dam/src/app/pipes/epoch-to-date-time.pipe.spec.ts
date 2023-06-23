import { EpochToDateTimePipe } from "./epoch-to-date-time.pipe";


describe('EpochToDateTimePipe', () => {
  it('create an instance', () => {
    const pipe = new EpochToDateTimePipe();
    expect(pipe).toBeTruthy();
  });
});
