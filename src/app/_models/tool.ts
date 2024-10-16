import { Address } from "./address";

export interface Tool {
  name: string;
  description: string;
  image: string;
  model: number;
  pricePerDay: number;
  isAvailable: boolean;
  address: Address;
  ownerId: string;
  caregoryName: string;

  styleAvailable: boolean;
  availableMessage: string;
}
