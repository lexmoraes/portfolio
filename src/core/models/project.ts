export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  gitBackendUrl?: string;
  gitFrontendUrl?: string;
  deployUrl?: string;
  /** Captura de tela do projeto; sem ela o card mostra um placeholder com o nome. */
  imageUrl?: string;
  scientificArticle?: string;
  corporate?: boolean;
  company?: string;
}
