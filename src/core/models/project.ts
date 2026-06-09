export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  gitBackendUrl?: string;
  gitFrontendUrl?: string;
  deployUrl?: string;
  imageUrl: string;
  featured: boolean;
  aosAnimation?: string;
  iframeUrl?: string;
  scientificArticle?: string;
  corporate?: boolean
}
