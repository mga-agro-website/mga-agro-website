import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Factory } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { FactoryImage } from "@shared/schema";

// Local factory images from public folder mapped by factory image ID
const factoryImageMap: Record<string, string> = {
  sorter: "/German Color Sorter in action.png",
  polisher: "/Satake Polisher Detail.png",
  packaging: "/High-Volume Processing Flow.png",
  quality: "/Quality Control Lab Inspection.png",
  storage: "/Climate-Controlled Storage.png",
  workers: "/Overall Factory Environment.png",
};

// Fallback images array (using local images)
const fallbackImages = [
  "/Overall Factory Environment.png",
  "/High-Volume Processing Flow.png",
  "/Macro View of Polished Grains.png",
];

const getFactoryImage = (imageId: string, index: number) => {
  // Try to get specific image by ID first
  if (factoryImageMap[imageId]) {
    return factoryImageMap[imageId];
  }
  // Fallback to index-based selection
  return fallbackImages[index % fallbackImages.length];
};

export default function FactoryGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const { data: images, isLoading } = useQuery<FactoryImage[]>({
    queryKey: ["/api/factory"],
  });

  const selectedImageData = images?.find(img => img.id === selectedImage);

  const getHeight = (index: number) => {
    return index % 3 === 0 ? "tall" : "medium";
  };

  return (
    <section
      id="factory"
      className="relative py-24 sm:py-32 bg-royal-black overflow-hidden"
      data-testid="section-factory"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6"
          >
            <Factory className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">World-Class Facility</span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="factory-title">
            Inside Our <span className="text-gold">Factory</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            State-of-the-art Japanese & German technology combined with 
            decades of expertise.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {isLoading ? (
            <>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={getHeight(i) === "tall" ? "sm:row-span-2" : ""}>
                  <Skeleton className={`w-full ${getHeight(i) === "tall" ? "h-[400px] sm:h-full" : "h-[250px] sm:h-[280px]"} rounded-lg bg-gold/10`} />
                </div>
              ))}
            </>
          ) : (
            images?.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer ${
                  getHeight(index) === "tall" ? "sm:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image.id)}
                data-testid={`factory-image-${image.id}`}
              >
                <div className={`relative overflow-hidden rounded-lg ${
                  getHeight(index) === "tall" ? "h-[400px] sm:h-full" : "h-[250px] sm:h-[280px]"
                }`}>
                  {/* Stock Factory Images */}
                  <img
                    src={getFactoryImage(image.id, index)}
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackImages[index % fallbackImages.length];
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-gold text-xs font-medium tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {image.category}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {image.title}
                    </h3>
                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {image.description}
                    </p>
                  </div>

                  {/* Zoom icon */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-testid={`factory-zoom-${image.id}`}
                    aria-label={`View ${image.title}`}
                  >
                    <ZoomIn className="w-5 h-5 text-white" />
                  </button>

                  {/* Golden border on hover */}
                  <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-lg transition-colors duration-500" />
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 font-cinzel text-lg sm:text-xl text-gold/80"
          data-testid="factory-caption"
        >
          "State-of-the-art Japanese & German Technology"
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="factory-lightbox"
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            data-testid="factory-lightbox-close"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="text-center">
              <img
                src={selectedImageData ? getFactoryImage(selectedImageData.id, images?.findIndex(img => img.id === selectedImage) || 0) : ""}
                alt={selectedImageData?.title || "Factory Image"}
                className="w-full h-auto rounded-lg mb-6 object-cover max-h-[80vh]"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  const fallbackIndex = images?.findIndex(img => img.id === selectedImage) || 0;
                  target.src = fallbackImages[fallbackIndex % fallbackImages.length];
                }}
              />
              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                {selectedImageData.title}
              </h3>
              <p className="text-white/60">
                {selectedImageData.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
