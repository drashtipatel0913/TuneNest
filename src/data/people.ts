
export interface Person {
  name: string;
  avatar: string;
  url: string;
}

export const people: Person[] = [
  { name: "Sam Altman", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", url: "https://blog.samaltman.com/" },
  { name: "Leo Radvinsky", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", url: "https://leoradvinsky.com/" },
  { name: "Pavel Durov", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", url: "https://t.me/s/durov" },
  { name: "Vitalik Buterin", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", url: "https://vitalik.eth.limo/" },
];
