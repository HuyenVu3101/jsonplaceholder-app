import axiosClient from './axiosClient';
import { User } from '../models';
import { Albums, UserUpdate } from './../models/albums';
import { Photos, PhotosOfIndex } from '../models/photos';

const JPAppApi = {
    getListUser: (): Promise<User[]> => {
        return axiosClient.get('users');
    },
    getAlbums: (user: any): Promise<Albums[]> => {
        return axiosClient.get(`users/${user.id}/albums`);
    },
    deleteAlbum: (id: number) => {
        return axiosClient.delete(`albums/${id}`);
    },
    getPhotosOfIndex: ({ start, end, albumsId }: PhotosOfIndex): Promise<Photos> => {
        if (albumsId) {
            return axiosClient.get(`photos?_start=${start}&_limit=${end}&albumId=${albumsId}`);
        }
        return axiosClient.get(`photos?_start=${start}&_limit=${end}`);
    },
    updateAlbum: (album: Albums) => {
        return axiosClient.post('albums', album);
    },
    updateUser: (data: UserUpdate) => {
        return axiosClient.put(`users/${data.id}`, data.dataUser);
    },
};
export default JPAppApi;
