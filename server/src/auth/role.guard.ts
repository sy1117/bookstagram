import { SetMetadata } from '@nestjs/common';
// export type AllowedRoles = keyof typeof UserRole | 'Any';
export type AllowedRoles = 'HOST' | 'LISTENER' | 'ANY';

export const Role = (roles: AllowedRoles[]) => SetMetadata('roles', roles);
