import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useAppDispatch } from './../../redux/hooks';
import { albumsActions } from '../../redux/albums/albumsSlice';
function Contact(props: any) {
    const { userFocus } = props;

    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = useState(false);
    const [email, setEmail] = useState(userFocus?.email);
    const [website, setWebsite] = useState(userFocus?.website);
    const [phone, setPhone] = useState(userFocus?.phone);
    const [isSubmit, setIsSubmit] = useState(false);
    return (
        <div className="col-6">
            {!isEdit ? (
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex items-center justify-content-between">
                            <h4 className="h4 text-info">Contact:</h4>
                        </div>
                    </div>

                    <div className="mb-2 col-12">
                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Email:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{email}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Website:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{website}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Phone:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                setIsEdit(true);
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <Form action="#">
                    <Form.Group className="mb-3 row" controlId="formBasicEmail">
                        <div className="col-12">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email..."
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    e.target.value !== userFocus?.email ? setIsSubmit(true) : setIsSubmit(false);
                                }}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 row" controlId="formBasicPhone">
                        <div className="col-12">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control
                                placeholder="Phone..."
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    e.target.value !== userFocus?.phone ? setIsSubmit(true) : setIsSubmit(false);
                                }}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3 row" controlId="formBasicWebsite">
                        <div className="col-12">
                            <Form.Label>Website:</Form.Label>
                            <Form.Control
                                className="form-control"
                                placeholder="Website..."
                                value={website}
                                onChange={(e) => {
                                    setWebsite(e.target.value);
                                    e.target.value !== userFocus?.website ? setIsSubmit(true) : setIsSubmit(false);
                                }}
                            />
                        </div>
                    </Form.Group>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex items-center gap-3">
                                <Button
                                    type="submit"
                                    disabled={!isSubmit}
                                    variant="success"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setIsEdit(false);
                                        dispatch(
                                            albumsActions.UPDATE_USER({
                                                id: userFocus.id,
                                                dataUser: { email, website, phone },
                                            }),
                                        );
                                    }}
                                >
                                    Submit
                                </Button>
                                <Button
                                    type="button"
                                    variant="danger"
                                    onClick={() => {
                                        setEmail(userFocus?.email);
                                        setPhone(userFocus?.phone);
                                        setWebsite(userFocus?.website);
                                        setIsEdit(false);
                                    }}
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </div>
    );
}

export default Contact;
