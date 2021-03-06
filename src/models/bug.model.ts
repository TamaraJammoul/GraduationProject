export interface Bug {
    id: string;
    status: string;
    isTested: boolean;
    name: string;
    column: number;
    row: number;
    fileName: string;
    path: string;
    description: string;
    title: string;
    submissionTime: string;
    submissionDate: string;
    user: {
        id: string;
        name: string;
    };
}
