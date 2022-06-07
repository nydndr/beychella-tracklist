export function durationToString(duration) {
  var hms = duration;
  var a = hms.split(":");

  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

  return seconds;
}
