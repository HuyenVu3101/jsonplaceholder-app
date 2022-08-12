import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { photosActions } from './../../redux/photos/photosSlice';

function ListPhotos() {
    const dispatch = useAppDispatch();
    const photos = useAppSelector((state) => state.photos.photos);

    useEffect(() => {
        dispatch(photosActions.GET_PHOTOS({ start: 1, end: 12, albumsId: undefined }));
    }, [dispatch]);
    return (
        <div className="row">
            {photos &&
                photos.length > 0 &&
                photos.map((photo) => (
                    <div className="mb-4 col-3" key={photo.id}>
                        <Card>
                            <Card.Img variant="top" src={photo.url} alt="" />
                            <Card.Body>
                                <Card.Title className="text-truncate ">{photo.title}</Card.Title>
                                <Card.Text className="my-3">Id: #{photo.id}</Card.Text>
                                <Card.Text>Album Id: #{photo.albumId}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
        </div>
    );
}

export default ListPhotos;
