
export interface Project {
  title: string;
  status: 'ongoing' | 'looking-for-partners' | 'completed';
  description: string;
}

export const projects: Project[] = [
  {
    title: "MedSync Pro",
    status: "ongoing",
    description: "AI-powered medication management system that reduces prescription errors by 40%."
  }
];
