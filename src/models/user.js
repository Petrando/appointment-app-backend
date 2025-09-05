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
    id: '2prkds5',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm', 
  },
  {
    email: 'petrando@gmail.com',
    id: 'lh74jhe',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  },
  {
    email: 'petrando1@gmail.com',
    id: 'x0rl5vi',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  },
  {
    email: 'client@gmail.com',
    id: 'u6doe6w',
    role: UserRole.Client,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  },
  {
    email: 'client1@gmail.com',
    id: 's26dnij',
    role: UserRole.Client,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  }
];