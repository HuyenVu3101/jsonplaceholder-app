function PAC(props: any) {
    const { userFocus } = props;
    return (
        <div className="col-6">
            <div className="d-flex flex-column gap-4">
                <div className="row">
                    <div className="col-12">
                        <h4 className="h4 text-info">Personal:</h4>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Id:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.id}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Username:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.username}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h4 className="h4 text-info">Address:</h4>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Street:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.address.street}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Suite:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.address.suite}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">City:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.address.city}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Zipcode:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.address.zipcode}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h4 className="h4 text-info">Company:</h4>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Name:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.company.name}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">CatchPhrase:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.company.catchPhrase}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-4">
                                <p className="mb-0">Bs:</p>
                            </div>

                            <div className="col-lg-9 col-8">
                                <p className="mb-0 fw-bold">{userFocus?.company.bs}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PAC;
