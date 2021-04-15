import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../actions/userActions';
import Spinner from './Spinner';


function UpdateProfileScreen(props) {

	const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
	const [name, setName] = useState(userInfo.name);
	const [email, setEmail] = useState(userInfo.email);
	const [gender, setGender] = useState(userInfo.gender);
	const [role, setRole] = useState(userInfo.role);
	const [about, setAbout] = useState(userInfo.about);
	const [department, setDepartment] = useState(userInfo.department);
	const [college, setCollege] = useState(userInfo.college);
	const [dob, setDob] = useState(userInfo.dob);
	const [github, setGithub] = useState(userInfo.github);
	const [linkedIn, setLinkedIn] = useState(userInfo.linkedIn);
	const [contactNo, setContactNo] = useState(userInfo.contactNo);
	const userUpdate = useSelector((state) => state.userUpdate);
    const { loading, user, error } = userUpdate;
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(update(userInfo._id, name, email, gender, role, about, department, college, dob, github, linkedIn, contactNo));
		
	}
 
    return (
        <>
		{loading ? <Spinner/>:
        <div className="container profile-form">
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div class="card-body">
		<div className="account-settings">
			<div className="user-profile">
				<div className="user-avatar">
					{userInfo.gender === "Male" ?
						<img className="user-profile-img" src="./assets/img/avatar7.png" alt="Maxwell Admin"/>
						: <img className="user-profile-img" src="./assets/img/woman-avatar-user-female.png" alt="Maxwell Admin"/>
					}
				</div>
				<h5 className="user-name">{userInfo.userName}</h5>
				<h6 className="user-email">{userInfo._id}</h6>
			</div>
			<div className="about">
				<h5>About</h5>
				<p>{about}</p>
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<form onSubmit={submitHandler}>
<div className="card h-100">
	<div className="card-body">
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">About You</h6>
			</div>
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="form-group">
					<textarea rows="3" className="form-control" onChange={(e) => setAbout(e.target.value)} placeholder="About You..."/>
				</div>
			</div>
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">Personal Details</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="fullName">Full Name</label>
					<input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Enter full name"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="eMail">Email</label>
					<input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email ID"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="phone">Contact No.</label>
					<input type="text" value={contactNo} className="form-control" onChange={(e) => setContactNo(e.target.value)} placeholder="Enter contact number"/>
				</div>
			</div><div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="website">Gender</label>
					<select className="form-control" onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="website">LinkedIn URL</label>
					<input type="url" value={linkedIn} className="form-control" onChange={(e) => setLinkedIn(e.target.value)} placeholder="Website url"/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="website">GitHub URL</label>
					<input type="url" value={github} className="form-control" onChange={(e) => setGithub(e.target.value)} placeholder="Website url"/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mt-3 mb-2 text-primary">Academic Details</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="Street">College</label>
					<select className="form-control" onChange={(e) => setCollege(e.target.value)}>
                        <option value="Indian Institute of Information Technology Senapati, Manipur">Indian Institute of Information Technology Senapati, Manipur</option>
                    </select>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="ciTy">Department</label>
					<select className="form-control" onChange={(e) => setDepartment(e.target.value)}>
                        <option value="CSE">CSE</option>
						<option value="ECE">ECE</option>
                    </select>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="sTate">Role</label>
					<select className="form-control" onChange={(e) => setRole(e.target.value)} >
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Staff">Staff</option>
                    </select>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="zIp">Date of Birth</label>
					<input type="date" value={dob} className="form-control" onChange={(e) => setDob(e.target.value)}/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
					{error && <div>{error}</div>}
                    <button type="submit" name="submit" class="btn btn-success">Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</form>
</div>
</div>
</div>
}
        </>
    );

}

export default UpdateProfileScreen