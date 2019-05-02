import { Address } from './address.model';

export interface User {
    id?: number;
    name?: string;
    email?: string;
    birthDate?: Date;
    address?: Address;
}
