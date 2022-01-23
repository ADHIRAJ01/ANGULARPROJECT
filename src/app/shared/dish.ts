import { Comment } from './Comment';

// 1. makig an array of types DISH then exporting to used anywhere
export interface DISH {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    label: string;
    description: string;
    featured: boolean;
    comments: Comment[];
}