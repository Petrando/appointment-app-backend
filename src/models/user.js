export const UserRole = {
  Therapist : 'therapist',
  Client : 'client',
}

// Added only for testing purposes
export const USERS = [
  {
    email: 'client@galaxies.dev',
    id: '7z6ydcm',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  {
    email: 'simon@galaxies.dev',
    id: '41m3lxk',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
];