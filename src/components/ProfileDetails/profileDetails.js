import React from 'react';

const ProfileDetails = ({ data }) => {
    return (
        <span data-testid="profile-details">
            {data.name && <div>Name: {data.name}</div>}
            {data.email && <div>Email: {data.email}</div>}
        </span>
    );
}

export default ProfileDetails;
