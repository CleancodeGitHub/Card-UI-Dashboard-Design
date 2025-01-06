export function generateRandomAvatar(): string {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://images.unsplash.com/photo-${randomId}?auto=format&fit=crop&q=80&w=150`;
}