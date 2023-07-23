interface UserListProps {
    items: []
}

const UserList: React.FC<UserListProps> = ({items}) => {
    return (
        <div>
            Users list
        </div>
    );
};

export default UserList;