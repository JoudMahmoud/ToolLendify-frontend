import { ContactInfo } from "./contact-info";


export interface Tool {
  name: string;
  description: string;
  image: string;
  model: number;
  pricePerDay: number;
  isAvailable: boolean;
  ContactInfo: ContactInfo;
  categoryName: string;

  styleAvailable: boolean ;
  availableMessage: string;
}
