// Function to delete a user by _id
function deleteUser(userId) {
    fetch(`/users/${userId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        // If deletion is successful, remove the user detail from the webpage
        const userElement = document.getElementById(`user-${userId}`);
        userElement.remove();
      } else {
        console.error('Failed to delete user');
      }
    })
    .catch((error) => console.error(error));
  }
  
  // Function to display user details on the webpage
  function displayUsers(users) {
    const userListDiv = document.getElementById('user-list');
  
    users.forEach((user) => {
      const userDiv = document.createElement('div');
      userDiv.id = `user-${user._id}`;
      userDiv.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
        <button class="delete-btn" onclick="deleteUser(${user._id})">Delete</button>
        <hr>
      `;
      userListDiv.appendChild(userDiv);
    });
  }
  
  // Fetch user data from the backend server and display it on the webpage
  fetch('/users')
    .then((response) => response.json())
    .then((data) => displayUsers(data))
    .catch((error) => console.error(error));
  