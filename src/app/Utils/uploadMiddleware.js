import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("file", file);
    cb(null, "public/uploads"); // Chemin de destination des fichiers téléchargés
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix); // Nom du fichier téléchargé
  },
});

const upload = multer({ storage: storage });
console.log("upload", upload.single("file"));
export default upload;
