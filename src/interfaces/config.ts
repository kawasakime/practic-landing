export interface ISocialItem {
  title: string;
  link: string;
}

export interface IServicesItem {
  title: string;
  price: number;
}

export interface IReviewItem {
  name: string;
  text: string;
  rating: number;
  img: string;
}

export interface IConfig {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    blackText: string;
    whiteText: string;
    additional: string;
  };
  information: {
    phone: string;
    email: string;
    address: string;
  };
  social: ISocialItem[];
  navigation: string[];
  mainSection: {
    title: {
      primary: string;
      secondary: string;
    };
    description: string;
    btnText: string;
  };
  aboutUs: {
    title: string;
    description: string;
    btnText: string;
  };
  services: {
    title: string;
    items: IServicesItem[];
  };
  advantage: {
    title: string;
    items: string[];
  };
  form: {
    title: {
      primary: string;
      secondary: string;
    };
    inputsText: [string, string];
    btnText: string;
  };
  reviews: {
    title: string;
    items: IReviewItem[];
  };
  contacts: {
    coordinates: number[];
    time: string;
  };
}
