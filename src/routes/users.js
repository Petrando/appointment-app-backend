// routes/users.ts
import { Router } from 'express';
import { StreamChat } from 'stream-chat';

const router = Router();
const client = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

// GET /users?role=therapist&email=petrando1@gmail.com
router.get('/', async (req, res) => {
  try {    
    const { role, email } = req.query;    
    const filters = {};

    if (role) filters.role = role;
    if (email) filters.email = email;

    const result = await client.queryUsers(filters);
    res.json(result.users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

export default router;
