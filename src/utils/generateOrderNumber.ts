export function generateOrderNumber(): string {
  const randomPart = Math.floor(1000 + Math.random() * 9000).toString();
  const timePart = Date.now().toString().slice(-4);
  return `ZH-${randomPart}-${timePart}`;
}
