import { useAppSelector } from '../../redux/hooks';

import PAC from './PAC';
import Contact from './Contact';
import { Albums } from '../../models';
function Info() {
    const { userFocus } = useAppSelector((state) => state.albums);

    return (
        <>
            <div className="mb-4 row">
                <div className="col-6">{/* <h2 className="h2 fw-bold">{albums.userFocus?.name}</h2> */}</div>
            </div>

            <div className="row">
                <PAC userFocus={userFocus} />
                <Contact userFocus={userFocus} />
            </div>
        </>
    );
}

export default Info;
