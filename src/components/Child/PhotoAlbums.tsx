import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './../../redux/hooks';
import { albumsActions } from './../../redux/albums/albumsSlice';
import { v4 as uuidv4 } from 'uuid';

function PhotoAlbums() {
    const [addAlbum, setAddAlbum] = useState('');
    const dispatch = useAppDispatch();
    const albums = useAppSelector((state) => state.albums.albums);
    useEffect(() => {
        dispatch(albumsActions.GET_ALBUMS());
    }, [dispatch]);

    return (
        <div className="col-12">
            <div className="border-top pt-3 mb-3 row">
                <div className="col-8">
                    <h4 className="h4">Photo Albums:</h4>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-6">
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Title of new album"
                            value={addAlbum}
                            onChange={(e) => {
                                setAddAlbum(e.target.value);
                            }}
                        />
                        <Button
                            className="flex-shrink-0 btn-lg"
                            variant="success"
                            onClick={() => {
                                if (addAlbum) {
                                    dispatch(
                                        albumsActions.UPDATE_ALBUM({
                                            userId: albums[0].userId,
                                            id: uuidv4(),
                                            title: addAlbum,
                                        }),
                                    );
                                }
                            }}
                        >
                            New Album
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="row">
                {albums.map((album, index) => (
                    <div key={album.id} className="mb-3 col-md-6">
                        <div className="d-flex align-items-center justify-content-between border rounded text-decoration-none text-black ">
                            <div className=" p-4 flex-shrink-0 border-end d-flex align-items-center justify-content-center ">
                                {index + 1}
                            </div>
                            <div className="py-2 w-100 px-4 text-truncate fw-bold text-start  align-items-center justify-content-start text-1">
                                {album.title}
                            </div>
                            <div className="text-center flex-shrink-0 w-10 py-2">
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm me-3"
                                    onClick={() => {
                                        dispatch(albumsActions.SET_ALBUM_DELETE(album.id));
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoAlbums;
