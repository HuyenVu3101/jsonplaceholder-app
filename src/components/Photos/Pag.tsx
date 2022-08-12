import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { photosActions } from './../../redux/photos/photosSlice';

function Pag() {
    const dispatch = useAppDispatch();
    const { photosOfIndex } = useAppSelector((state) => state.photos);

    return (
        <div className="col-12 my-5">
            <div className="w-100 text-align-center d-flex justify-content-center">
                <Button
                    variant="primary"
                    onClick={() => {
                        dispatch(
                            photosActions.GET_PHOTOS({
                                ...photosOfIndex,
                                end: photosOfIndex.end + 12,
                            }),
                        );
                    }}
                >
                    Load more
                </Button>
            </div>
        </div>
    );
}

export default Pag;
