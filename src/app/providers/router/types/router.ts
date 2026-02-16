import type { RouteObject } from 'react-router';
import type { ApiSchema } from "@/shared/types";

type UserRole = ApiSchema<'UserResponseDto'>['rol'];

export type AppRouteProps = Omit<RouteObject, 'children'> & {
    authOnly?: boolean;
    access?: UserRole[];
    children?: AppRouteProps[];
};