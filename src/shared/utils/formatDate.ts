import { format, formatDistanceToNow } from 'date-fns';
import moment from 'moment';

// ----------------------------------------------------------------------

export function fDate(date: Date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date: Date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date: Date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date: Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function getDuration(mils: number) {
  const duration = moment.duration(mils, 'millisecond').humanize();
  return duration;
}
