export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
  imageUrl: string;
  featured: boolean;
  aosAnimation?: string;
}
