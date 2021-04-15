import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions/userActions';
import Spinner from "./Spinner";


function UsersScreen(props) {

	const userList = useSelector((state) => state.userList);
    const { users, loading, error } = userList;
	console.log(users)
    const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getAllUsers());
        return () => {
        //
        };
    }, []);

    return (
		<>
		{ loading ? <Spinner/> :
        <div className="row all-user-card">

			{users.map((user) => (
            <div className="col-3" key={user._id}>
				<div className="card">
					{user.gender === "Male" ?
						<img className="profile-img" src="./assets/img/avatar7.png" alt="Maxwell Admin"/>
						: <img className="profile-img" src="./assets/img/woman-avatar-user-female.png" alt="Maxwell Admin"/>
					}
				  <div className="card-body">
					<h5 className="card-title">{user.userName}</h5>
					<p className="card-text">{user.email}</p>
				  </div>
				</div>
			</div>             
            ))
			}
		
			
		</div>
		}
		</>
    );

}

export default UsersScreen;