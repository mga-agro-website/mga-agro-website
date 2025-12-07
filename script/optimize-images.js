import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.resolve(__dirname, '../client/src/assets');

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found:', assetsDir);
    return;
  }

  const files = fs.readdirSync(assetsDir);

  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inputPath = path.join(assetsDir, file);
      const fileName = path.parse(file).name;
      const outputPath = path.join(assetsDir, `${fileName}.webp`);

      try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Processing ${file} (${(metadata.size / 1024 / 1024).toFixed(2)} MB)...`);

        await sharp(inputPath)
          .resize(800, 800, { // Resize to max 800x800, keeping aspect ratio
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 80 }) // Convert to WebP with 80% quality
          .toFile(outputPath);

        console.log(`Generated ${fileName}.webp`);
        
        // Optional: Delete original large file
        // fs.unlinkSync(inputPath); 
        // console.log(`Deleted original ${file}`);

      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages();

