import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useAppDispatch } from './../../redux/hooks';
import { photosActions } from './../../redux/photos/photosSlice';
function SearchPhoto() {
    const dispatch = useAppDispatch();
    const [searchAlbumById, setSearchAlbumById] = useState('');

    return (
        <div className=" my-4 row">
            <div className="col-12">
                <Form className="d-flex align-items-center gap-2 col-6">
                    <Form.Select defaultValue="albumId">
                        <option value="albumId">Album Id</option>
                    </Form.Select>
                    <Form.Control
                        placeholder="Search by album id"
                        value={searchAlbumById}
                        onChange={(e) => {
                            setSearchAlbumById(e.target.value);
                        }}
                    />
                    <Button
                        variant="primary"
                        onClick={() => {
                            if (typeof +searchAlbumById === 'number')
                                dispatch(
                                    photosActions.GET_PHOTOS({
                                        start: 1,
                                        end: 12,
                                        albumsId: +searchAlbumById,
                                    }),
                                );
                        }}
                    >
                        Search
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default SearchPhoto;
