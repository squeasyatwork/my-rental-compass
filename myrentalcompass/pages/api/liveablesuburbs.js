import prisma from '../../lib/prisma.js';

export default async function handler(req, res) {
  try {
    const rentLimit = parseFloat(req.query.rent); // Extract the rent query parameter and parse it as a float since you're using Decimal.

    if (!rentLimit || isNaN(rentLimit)) {
      return res.status(400).json({ error: "Invalid rent value provided." });
    }

    // Fetch data from your database using Prisma with a rent filter
    const suburbs = await prisma.data_by_suburb.findMany({
      where: {
        average_rent: {
          lte: rentLimit, // lte stands for 'less than or equal to'
        },
      },
    });

    res.status(200).json(suburbs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
