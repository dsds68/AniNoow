function loginUser() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const found = users.find(user => user.username === username && user.password === password);

  if (found) {
    localStorage.setItem('logged', username);
    window.location.href = 'home.html';
  } else {
    alert("Wrong username or password!");
  }
  return false;
}

function registerUser() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();

  if (username === '' || password === '') {
    alert("Please fill all fields!");
    return false;
  }

  let users = JSON.parse(localStorage.getItem('users') || '[]');

  if (users.some(user => user.username === username)) {
    alert("Username already exists!");
    return false;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Account created successfully! Now login.");
  window.location.href = 'index.html';
  return false;
}

function logout() {
  localStorage.removeItem('logged');
  window.location.href = 'index.html';
}

// Redirect to login if not logged in
if (location.pathname.endsWith("home.html") && !localStorage.getItem('logged')) {
  window.location.href = "index.html";
}
