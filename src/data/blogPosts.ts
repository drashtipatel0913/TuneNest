
export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Future of Pharmacy Tech",
    date: "2024-06-20",
    excerpt: "Exploring how automation and AI are transforming pharmaceutical workflows and patient care delivery.",
    url: "#blog/pharmacy-tech-future"
  }
];

export const sectionSubtitle = "Recent experiences, thoughts, and anything worth sharing.";
