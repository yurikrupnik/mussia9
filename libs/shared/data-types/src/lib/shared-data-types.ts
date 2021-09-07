export function sharedDataTypes(): string {
  return "shared-data-types";
}

export interface User {
  name: string;
  email: string;
  password?: string;
  image: string;
  _id: string;
}

export interface Product {
  user: User["_id"];
  services: [Service];
}

export interface Service {
  name: string;
  description: string;
}
