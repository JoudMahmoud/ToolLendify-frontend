import { Address } from "./address";

export interface User {
  id: string;
  name: string;
  imageUrl: string;
  address: Address;
}
