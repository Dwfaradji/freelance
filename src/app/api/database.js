// Usage: http://localhost:3000/api/database
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    await prisma.$connect();
    console.log("Connexion à la base de données établie avec succès.");
    res.json({
      message: "Connexion à la base de données établie avec succès.",
    });
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données :", error);
    res.json({ message: "Échec de la connexion à la base de données." });
  }
}
