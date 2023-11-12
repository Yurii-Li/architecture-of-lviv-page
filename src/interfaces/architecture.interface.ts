export interface IArchitectureCard {
  id: number;
  name: string;
  main_image: string;
  category: {
    name: string;
  };
}

export interface IArchitecturalLandmarkSearchResult {
  id: number;
  name: string;
  category: {
    name: string;
  };
}
