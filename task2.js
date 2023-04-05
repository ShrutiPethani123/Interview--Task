const axios = require('axios');

axios.get('https://reqres.in/api/users').then(res => {
  const users = res.data.data;
  console.log('All users:', users);

  const userToUpdate = users.find(user => user.first_name.toLowerCase().startsWith('g'));
  if (userToUpdate) {
    console.log('User to update:', userToUpdate);
    axios.put(`https://reqres.in/api/users/${userToUpdate.id}`, {
      email: 'abc@gmail.com'
    }).then(response => {
      console.log('Updated user:', response.data);

      const otherUsersToDelete = users.filter(user => user.id !== userToUpdate.id);
      const deletePromises = otherUsersToDelete.map(user => axios.delete(`https://reqres.in/api/users/${user.id}`));
      Promise.all(deletePromises)
        .then(() => console.log('Deleted other users successfully'))
        .catch(error => console.error('Failed to delete other users:', error));
    }).catch(error => console.error('Failed to update user:', error));
  } else {
    console.log('No user found whose name starts with "a"');
  }
}).catch(error => console.error('Failed to get users:', error));
