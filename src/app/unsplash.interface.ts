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