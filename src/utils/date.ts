export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Kyiv',
    year: 'numeric',
    month: 'short',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
};
