import shortId from 'shortid';

export const fetchAllUsers = () => {
    console.log('fetchAllUsers');
}

export const fetchUserById = id => {
    console.log('fetchUserById');
}

export const updateUserById = id => {
    console.log('updateUserById');
}

// export default { fetchAllUsers, fetchUserById, updateUserById };

export const x = 5;

export const y = 'qweqweqwe';

export const addUser = name => {
    const user = {
        id: shortId.generate(),
        name,
    }

    console.log(user);
};