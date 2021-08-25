export interface Project {
    id: string;
    users: user[],
    name: string;
    key: string;
}

interface user {
    id: string,
    name: string
}
