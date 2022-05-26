import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";

// eslint-disable-next-line react/prop-types
const Users = ({ searchValue }) => {
    const params = useParams();
    const { userId } = params.filter(obj => {
        // eslint-disable-next-line react/prop-types
        if (obj.userId.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    });
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;
