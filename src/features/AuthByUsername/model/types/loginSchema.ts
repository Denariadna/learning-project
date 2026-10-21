export interface LoginSchema {
    username: string;
    password: string;
    isLodaing: boolean;
    error?: string;
}
