import { Dashlet } from './dashlet';

export interface Dashboard {

  id: number;
  name: string;
  description: string;
  creationDate: string;
  dashlets: Dashlet[];
}