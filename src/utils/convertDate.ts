const formatDate = (isoDate: string, locale: string) => {
  const date = new Date(isoDate);
  
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

export default formatDate;

