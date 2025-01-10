import { Response } from 'express';

export function handleError(res: Response, error: unknown) {
  if (error instanceof Error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }

    if (error.message === 'Customer not found') {
      return res.status(404).json({ error: error.message });
    }

    if (error.message.includes('already exists')) {
      return res.status(409).json({ error: error.message });
    }

    if (error.message.includes('Unauthorized')) {
      return res.status(401).json({ error: error.message });
    }

    if (error.message.includes('Forbidden')) {
      return res.status(403).json({ error: error.message });
    }

    return res.status(500).json({ error: error.message });
  }

  return res.status(500).json({ error: 'An unexpected error occurred' });
}