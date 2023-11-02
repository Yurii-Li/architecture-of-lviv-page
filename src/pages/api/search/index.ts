import type { NextApiRequest, NextApiResponse } from 'next';

import { IArchitecturalLandmarkSearchResult } from '@/interfaces/architecture.interface';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IArchitecturalLandmarkSearchResult[] | { error: string }>
) {
  if (req.method === 'GET') {
    const { name } = req.query;

    if (!name)
      return res.status(400).json({ error: 'Missing name query param' });
    if (typeof name !== 'string')
      return res
        .status(400)
        .json({ error: 'Name query param must be a string' });

    let architecturalLandmarks: IArchitecturalLandmarkSearchResult[] = [];

    try {
      architecturalLandmarks = await prisma.architectural_landmarks.findMany({
        where: {
          OR: [
            {
              name: {
                startsWith: name,
                mode: 'insensitive'
              }
            },
            {
              name: {
                contains: ` ${name}`,
                mode: 'insensitive'
              }
            }
          ]
        },
        select: {
          id: true,
          name: true,
          category: {
            select: {
              name: true
            }
          }
        }
      });
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'Unable to fetch architectural landmarks' });
    }

    return res.status(200).json(architecturalLandmarks);
  }
}
