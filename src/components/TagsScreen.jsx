import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags} from '../actions/userActions';
import Spinner from './Spinner';


function TagsScreen(props) {

    const tagList = useSelector((state) => state.userList);
	console.log(tagList)
    const { users, loading, error } = tagList;
    const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getAllTags());
        return () => {
        //
        };
    }, []);

    return (
		<>
		{ loading ? <Spinner/> :
        <div className="row all-user-card">

			{users.map((tag) => (
            <div className="col-4 my-2" key={tag._id}>
				<div className="card border-primary">
					<h5 className="card-header badge-primary">{tag.tag}</h5>	
				  <div className="card-body">
					
					<div className="card-text tag-description">{tag.description}...</div>
					
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

export default TagsScreen;