/**
 * @flow strict
 */

export type TimeInfo = {
  humanReadable: string,
  date: Date,
  ttl: number,
};

export default function relativizeDate(dateString: string): TimeInfo {
  const now = new Date();
  const date = new Date(Date.parse(dateString));
  const delta = now.getTime() - date.getTime();
  const seconds = Math.round(delta / 1000);
  let humanReadable;
  let ttl;

  if (seconds < 0) {
    humanReadable = 'in the future';
    ttl = seconds * -1;
  } else if (seconds === 0) {
    humanReadable = 'now';
    ttl = 1;
  } else if (seconds < 60) {
    humanReadable = 'a few seconds ago';
    ttl = 60 - seconds;
  } else if (seconds < 120) {
    humanReadable = 'a minute ago';
    ttl = 120 - seconds;
  } else if (seconds < 180) {
    humanReadable = 'a couple of minutes ago';
    ttl = 180 - seconds;
  } else if (seconds < 300) {
    // 5 minutes
    humanReadable = 'a few minutes ago';
    ttl = 300 - seconds;
  } else if (seconds < 3600) {
    // 60 minutes
    humanReadable = Math.floor(seconds / 60) + ' minutes ago';
    ttl = 60 - (seconds % 60);
  } else if (seconds < 7200) {
    humanReadable = 'an hour ago';
    ttl = 7200 - seconds;
  } else if (seconds < 86400) {
    // 24 hours
    humanReadable = Math.floor(seconds / 3600) + ' hours ago';
    ttl = 3600 - (seconds % 3600);
  } else {
    const days = Math.floor(seconds / 86400);
    if (days === 1) {
      humanReadable = 'yesterday';
      ttl = 86400 - (seconds % 86400);
    } else if (days <= 7) {
      humanReadable = days + ' days ago';
      ttl = 86400 - (seconds % 86400);
    } else {
      const secondsPerWeek = 86400 * 7;
      const weeks = Math.floor(days / 7);
      if (weeks === 1) {
        humanReadable = 'a week ago';
        ttl = secondsPerWeek - (seconds % secondsPerWeek);
      } else if (weeks <= 6) {
        humanReadable = weeks + ' weeks ago';
        ttl = secondsPerWeek - (seconds % secondsPerWeek);
      } else {
        humanReadable = date.toLocaleDateString();
        ttl = Infinity;
      }
    }
  }

  return {
    date,
    humanReadable,
    ttl,
  };
}
