import { AlbumType } from './albumtype';

export interface Album {
    ID: number;
    Name: string;
    Label: string;
    Artist: string;
    Type: AlbumType;
    Stock: number;
}
