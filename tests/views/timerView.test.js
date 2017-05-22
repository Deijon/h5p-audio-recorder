import test from 'ava';
import Timer from '../../src/views/Timer.vue';

const SECONDS_IN_MINUTE = 60;

test.beforeEach(t => {

});

test('format time filter', t => {
  t.is(Timer.filters.formatTime(0), '00:00');
  t.is(Timer.filters.formatTime(59), '00:59');
  t.is(Timer.filters.formatTime(1 * SECONDS_IN_MINUTE), '01:00');
  t.is(Timer.filters.formatTime((15 * SECONDS_IN_MINUTE) + 30), '15:30');
  //t.is(Timer.filters.formatTime(60*60), '1:00:00');
});
