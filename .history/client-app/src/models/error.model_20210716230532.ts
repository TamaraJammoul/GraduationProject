export interface Error {
    id: string;
    column: number;
    row: number;
    fileName: string;
    path: string;
    description: string;
    submissionTime: string;
    isBug: boolean
}
