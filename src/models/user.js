export const UserRole = {
  Therapist : 'therapist',
  Client : 'client',
}

// Added only for testing purposes
export const USERS = [
  {
    email: 'client@galaxies.dev',
    id: 'mbz1coo',
    role: UserRole.Client,
    hashed_password: '$2b$10$.MftzcPPsR5TUTYRyWGyQu9H9Fd3Q6olBlccI1qIAY3qXH7OQ.bQO', // dummy "123456"
  },
  // for the rest of the users, the password is "pass123456"
  {
    email: 'simon@galaxies.dev',
    id: 'vv6s6mt',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm', 
  },
  {
    email: 'petrando1@gmail.com',
    id: 'sk2igl3',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  },
  {
    email: 'petrando2@gmail.com',
    id: 'lskmkmc',
    role: UserRole.Therapist,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  },
  {
    email: 'client1@gmail.com',
    id: 'clr0j6q',
    role: UserRole.Client,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  },
  {
    email: 'client2@gmail.com',
    id: 'vpmwlbx',
    role: UserRole.Client,
    hashed_password: '$2b$10$ZqK7Gm8f3pL9yT4xC2n5Jew5ejjR0N8kT2oNM8iJH0bFmqs9YHRTm'
  }
];