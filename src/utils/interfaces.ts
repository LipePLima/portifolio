export interface ProjectDTO {
  owner: Owner;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
}

interface Owner {
  login: string;
  id: number;
}
