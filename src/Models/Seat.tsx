import User from "./User";

export default interface Seat{
    Id: string;
    User: User | null;
    Title: string;
    Width: number;
    Height: number;
    X: number;
    Y: number;
}
