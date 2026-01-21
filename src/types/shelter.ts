export interface ShelterProject {
  id: string;
  name: string;
  last_division: string;
  last_owner: string;
  description: string;
  image: {
    url: string;
    alt?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
