export interface Photos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface PhotosOfIndex {
    start: number;
    end: number;
    albumsId?: number;
}
