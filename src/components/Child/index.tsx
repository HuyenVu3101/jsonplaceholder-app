import { Container } from 'react-bootstrap';

import Info from './Info';
import PhotoAlbums from './PhotoAlbums';
function Child() {
    return (
        <Container className="py-2 lh-base">
            <div className="mb-4 row">
                <div className="col-12">
                    <Info />
                </div>
            </div>

            <div className="row">
                <PhotoAlbums />
            </div>
        </Container>
    );
}

export default Child;
