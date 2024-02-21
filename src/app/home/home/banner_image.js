const fs = require("fs").promises;
const path = require("path");

async function readImages() {
  try {
    const imagesFolder = "../../../assets/banner";
    const directoryPath = path.join(__dirname, imagesFolder);
    const imageFileNames = await fs.readdir(directoryPath);

    const outputFile = path.join(__dirname, "./banner_image.ts"); // Output file to store image names

    // Format image names with relative paths
    const formattedImageNames = imageFileNames.map((fileName) =>
      path.join(imagesFolder, fileName)
    );

    // Generate TypeScript content
    const content = `
    // This file is auto-generated by the readImages.js script.
    export const imageFileNames = [${formattedImageNames
      .map((name) => `"${name.replace(/\\/g, '/')}"`)
      .join(", ")}];
    `;

    // Write content to the TypeScript file
    await fs.writeFile(outputFile, content);

    console.log(`Successfully generated ${outputFile}`);
  } catch (error) {
    console.error("Error reading directory:", error.message);
  }
}

// Call the function to read images
readImages();
