export default function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000)
    .toISOString()
    .substring(14, 23)
    .replace(".", ":");
}
