let currentUser = null

export async function signUp(email, password) {
  // In a real app, you would hash the password and store it securely
  await new Promise(resolve => setTimeout(resolve, 1000))
  currentUser = { email, role: 'admin' }
  return currentUser
}

export async function signIn(email, password) {
  // In a real app, you would verify the email and password
  await new Promise(resolve => setTimeout(resolve, 1000))
  if (currentUser && currentUser.email === email) {
    return currentUser
  }
  throw new Error('Invalid credentials')
}

export function getCurrentUser() {
  return currentUser
}

export function signOut() {
  currentUser = null
}

