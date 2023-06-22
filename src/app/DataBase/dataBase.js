import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function dbConnect(req, res) {
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