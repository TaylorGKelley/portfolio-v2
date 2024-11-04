export default function formatDate(date: Date): string {
  const month = date.toLocaleString('month', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${year}`;
}
