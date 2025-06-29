
export interface Purchase {
  item: string;
  image: string;
  why: string;
  rating: number;
  date: string;
  url: string;
  review: string;
}

export const purchases: Purchase[] = [
  {
    item: "Hydro Flask 128 oz Oasis",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
    why: "Influencer hype got me 😅 – wanted a single bottle to last a road-trip.",
    rating: 3.7,
    date: "2025-06-26",
    url: "https://www.amazon.ca/dp/B0DP74WBFJ",
    review: "Long-form thoughts on insulation, carry-handle comfort, and whether 128 oz is *too* big."
  }
];
