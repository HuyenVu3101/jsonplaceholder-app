import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { User } from '../../models';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userActions } from '../../redux/user/userSlice';
import { albumsActions } from '../../redux/albums/albumsSlice';
import Td from './Td';

const Users = () => {
    const dispatch = useAppDispatch();
    const listUser = useAppSelector((state) => state.user.users);
    useEffect(() => {
        dispatch(userActions.GET_LIST_USERS());
    }, [dispatch]);

    return (
        <Container>
            <h1 className="fs-2 fw-bold my-3">Users</h1>
            <Table striped bordered hover>
                <thead className="border-bottom border-dark fw-bold">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">City</th>
                        <th scope="col">Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((user: User) => {
                            const {
                                id,
                                name,
                                username,
                                email,
                                phone,
                                address: { city },
                                website,
                                company: { name: companyName },
                            } = user;
                            return (
                                <tr
                                    key={id}
                                    role="button"
                                    onClick={() => {
                                        dispatch(albumsActions.ALBUMS_FOCUS(user));
                                    }}
                                >
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {id}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {name}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {username}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {email}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {phone}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {city}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {website}
                                    </Td>
                                    <Td to={`/users/${id}`} className={'text-dark lh-base'}>
                                        {companyName}
                                    </Td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;
