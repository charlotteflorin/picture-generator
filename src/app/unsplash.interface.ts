export interface UnsplashImage {
    id: string;
    urls: {
      regular: string;
    };
    description: string;
    user: {
      name: string;
    };
  }

  export interface ID {
    id: string;
  }

  export interface ApiStatsResponse {
    id: string;
    downloads: {
      total: number;
      historical: {
        change: number;
        resolution: string;
        quantity: number;
        values: { date: string; value: number }[];
      };
    };
    views: {
      total: number;
      historical: {
        change: number;
        resolution: string;
        quantity: number;
        values: { date: string; value: number }[];
      };
    };
    likes: {
      total: number;
      historical: {
        change: number;
        resolution: string;
        quantity: number;
        values: { date: string; value: number }[];
      };
    };
  }