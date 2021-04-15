import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function UserProfileScreen(props) {

	const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
	console.log(userInfo)
	

    return (
        <>
		 
        <div className="container profile-form">
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	<div className="card-body">
		<div className="account-settings">
			<div className="user-profile">
				<div className="user-avatar">
					{userInfo.gender == "Male" ?
						<img className="user-profile-img" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
						: <img className="user-profile-img" src="https://www.clipartkey.com/mpngs/m/20-205433_woman-avatar-user-female.png" alt="Maxwell Admin"/>
					}
					
				</div>
				<h5 className="user-name">{userInfo.userName}</h5>
				<h6 className="user-email">{userInfo._id}</h6>
			</div>
			<div className="about">
				<h5>About</h5>
				<p>{userInfo.about}</p>
			</div>
		</div>
	</div>
</div>
</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body">
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mb-2 text-primary">Personal Details</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Full Name</label>
                    <p class="form-control">{userInfo.name}</p>

				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<p class="form-control">{userInfo.email}</p>

				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="website">Enrollment No.</label>
					<p class="form-control">{userInfo.rollNo}</p>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Gender</label>
					<p class="form-control">{userInfo.gender}</p>

				</div>
			</div>
			
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 text-primary">Address</h6>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Street</label>
					<input type="name" class="form-control" id="Street" placeholder="Enter Street"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="ciTy">City</label>
					<input type="name" class="form-control" id="ciTy" placeholder="Enter City"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="sTate">State</label>
					<input type="text" class="form-control" id="sTate" placeholder="Enter State"/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="zIp">Zip Code</label>
					<input type="text" class="form-control" id="zIp" placeholder="Zip Code"/>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
	
        </>
    );

}

export default UserProfileScreen