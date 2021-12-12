export interface DogImageData {
  breeds?: Breed[];
  id?: string;
  url?: string;
  width?: number;
  height?: number;
}

export interface Breed {
  weight?: Measures;
  height?: Measures;
  id?: number;
  name?: string;
  bred_for?: string;
  breed_group?: string;
  life_span?: string;
  temperament?: string;
  reference_image_id?: string;
}

interface Measures {
  imperial?: string;
  metric?: string;
}
