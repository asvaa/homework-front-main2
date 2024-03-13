import React from 'react';
import { CurrentUser } from './CurrentUser';
import { UsersObjectType } from './HW2';


export type UserList2PropsType = {
	users: UsersObjectType
	filterUsers: () => void
};

export const UserList2: React.FC<UserList2PropsType> = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>


			<button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			<ul>
				{props.users.myFriends.map((user, index) => (

					<CurrentUser key={index} user={user} />
				))}
			</ul>
		</div>
	);
};