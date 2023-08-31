import { useState } from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="container row m-auto">

            <div className="col">
                <div className="card shadow w-100 mt-5">
                    <div className="card-header">
                        <h1 className="text-primary">Create User Account</h1>
                    </div>
                    <div className="card-body w-75 m-auto">
                        <form onSubmit={createUser}>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">First Name: </label>
                                <input className="form-control" type="text" value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Last Name: </label>
                                <input className="form-control" type="text" value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Email Address: </label>
                                <input className="form-control" type="text" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Password: </label>
                                <input className="form-control" type="password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label float-start text-primary-emphasis">Confirm Password: </label>
                                <input className="form-control" type="confirmPassword" value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <input className="btn btn-primary float-end" type="submit" value="Create User"/>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow mt-5">
                    <div className="card-body mt-5 ps-5 container-fluid d-flex flex-column">
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                First Name:</span> {firstName}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Last Name:</span> {lastName}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Email:</span> {email}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Password:</span> {password}</h3>
                        </div>
                        <div class="mb-5">
                            <h3 className="float-start"><span className="text-primary-emphasis">
                                Confirm Password:</span> {confirmPassword}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
