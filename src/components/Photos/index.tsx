import Container from 'react-bootstrap/Container';
import ListPhotos from './ListPhotos';
import Pag from './Pag';
import SearchPhoto from './SearchPhotos';

function Photos() {
    return (
        <Container>
            <h1 className="fs-2 fw-bold my-3">Photos</h1>
            <SearchPhoto />
            <ListPhotos />
            <Pag />
        </Container>
    );
}

export default Photos;
