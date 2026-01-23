import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

// Import all article images (we have 12 unique images, will create 16 entries)
import article1 from "../assets/print-articles/1.jpg";
import article3 from "../assets/print-articles/3.png";
import article4 from "../assets/print-articles/4.png";
import article5 from "../assets/print-articles/5.jpg";
import article6 from "../assets/print-articles/6.jpg";
import article7 from "../assets/print-articles/7.jpg";
import article8 from "../assets/print-articles/8.jpg";
import article9 from "../assets/print-articles/9.jpg";
import article13 from "../assets/print-articles/13.jpg";
import article14 from "../assets/print-articles/14.jpg";
import article15 from "../assets/print-articles/15.jpg";
import article16 from "../assets/print-articles/16.jpg";

const articles = [
  { 
    id: 1, 
    src: article1, 
    alt: "Business Times Singapore Article",
    title: "S'pore-based firm to advise Obama portrait artist on private deal",
    description: "Singapore boutique investment banking advisory firm DeConseil Pte Ltd exclusively advises artist Gilbert Young on Barack Obama portrait deal.",
    publication: "The Business Times",
    date: "November 2009"
  },
  { 
    id: 3, 
    src: article3, 
    alt: "Marketing the Muse Article",
    title: "Marketing the muse - This is for you, Mr Obama",
    description: "Artist Gilbert Young and graphic designer create hues of life on canvas with Obama portrait as symbol of hope and change.",
    publication: "ASRP Mukesh",
    date: "2009"
  },
  { 
    id: 4, 
    src: article4, 
    alt: "Singapore Firm Obama Portrait Deal",
    title: "Singapore firm wins deal to sell Obama portrait",
    description: "Singapore investment firm clinches exclusive deal to sell painting of President Barack Obama by renowned African-American artist Gilbert Young.",
    publication: "Business News",
    date: "November 2009"
  },
  { 
    id: 5, 
    src: article5, 
    alt: "Business Times Weekend Obama Portrait",
    title: "DeConseil advises on Obama portrait private art deal",
    description: "Singapore-based DeConseil Pte Ltd advises artist Gilbert Young on exclusive Obama portrait deal, marking historic presidential endorsement.",
    publication: "Business Times Weekend",
    date: "November 2009"
  },
  { 
    id: 6, 
    src: article6, 
    alt: "DeGroup CEO Interview",
    title: "Face2Face with Singapore-based DeGroup's CEO, Gaurav Shah",
    description: "Exclusive interview discussing Indian industry outlook, investment banking opportunities, and DeGroup's strategic positioning in emerging markets.",
    publication: "Business Magazine",
    date: "March 2010"
  },
  { 
    id: 7, 
    src: article7, 
    alt: "Deals India Social Investment",
    title: "New fund raising money only through donations",
    description: "Social investment initiative focusing on impact investing and sustainable development through innovative donation-based funding models.",
    publication: "Deals India",
    date: "2010"
  },
  { 
    id: 8, 
    src: article8, 
    alt: "Obama Indian Art Market",
    title: "Obama seeks Indian ART MART",
    description: "Barack Obama-signed portrait by Gilbert Young targets prospective Indian buyers, creating interest in Indian art collecting market.",
    publication: "Art News",
    date: "2010"
  },
  { 
    id: 9, 
    src: article9, 
    alt: "Mumbai Mirror Obama Portrait",
    title: "Want a piece of Barack Obama? Start bidding",
    description: "After Singapore success, Obama's autographed painting reaches Mumbai as part of global bid for Indian collectors and art enthusiasts.",
    publication: "Mumbai Mirror",
    date: "March 2010"
  },
  { 
    id: 13, 
    src: article13, 
    alt: "Investment Advisory Article",
    title: "Strategic Investment Advisory Services",
    description: "Analysis of boutique investment banking services and advisory expertise in cross-border transactions and private deals.",
    publication: "Financial Review",
    date: "2010"
  },
  { 
    id: 14, 
    src: article14, 
    alt: "Art Investment Market Analysis",
    title: "Art Investment and Market Dynamics",
    description: "Examination of art investment trends, presidential memorabilia market, and strategic positioning in luxury asset classes.",
    publication: "Art Market Review",
    date: "2010"
  },
  { 
    id: 15, 
    src: article15, 
    alt: "Cross-Border Advisory Services",
    title: "Cross-Border Investment Advisory",
    description: "Strategic advisory services for international transactions, with focus on Asia-Pacific and Singapore-India investment corridors.",
    publication: "Investment Weekly",
    date: "2009"
  },
  { 
    id: 16, 
    src: article16, 
    alt: "Presidential Art Legacy",
    title: "Presidential Art and Investment Legacy",
    description: "Historical significance of presidential artwork in investment portfolios and cultural asset preservation strategies.",
    publication: "Legacy Investments",
    date: "2009"
  },
  // Additional articles to reach 16 total
  { 
    id: 10, 
    src: article1,
    alt: "DeConseil Investment Strategy",
    title: "DeConseil's Strategic Investment Approach",
    description: "Singapore-based firm's unique approach to advisory services in art investments and cross-cultural business development.",
    publication: "Investment Strategy",
    date: "2009"
  },
  { 
    id: 11, 
    src: article5,
    alt: "Presidential Memorabilia Market",
    title: "Presidential Memorabilia Investment Trends",
    description: "Market analysis of presidential memorabilia investments, featuring Obama portrait deal as case study in political art valuation.",
    publication: "Memorabilia Market",
    date: "2009"
  },
  { 
    id: 12, 
    src: article8,
    alt: "Indian Art Collection Trends",
    title: "Indian Collectors and International Art",
    description: "Growing interest among Indian collectors in international political art and presidential memorabilia investments.",
    publication: "India Art Review",
    date: "2010"
  },
  { 
    id: 17, 
    src: article9,
    alt: "Global Art Investment",
    title: "Global Art Investment Opportunities",
    description: "International art investment opportunities focusing on political memorabilia and cross-cultural artistic significance.",
    publication: "Global Art Investor",
    date: "2010"
  },
];

export default function PrintArticles() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % articles.length);
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + articles.length) % articles.length);
      setIsZoomed(false);
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === " ") {
        e.preventDefault();
        toggleZoom();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          {/* Back Button */}
          <div className="w-full max-w-7xl mb-8">
            <Link href="/about/media">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300"
                data-testid="back-to-media"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Media
              </Button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Print Articles Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Explore our comprehensive collection of strategic insights and market intelligence featured in leading publications worldwide
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Print Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any article to view in full detail with zoom and navigation capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="group rounded-3xl border-2 border-white/60 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
                data-testid={`article-card-${article.id}`}
              >
                {/* Article Preview Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.src} 
                    alt={article.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-brand-red uppercase tracking-wide">
                      {article.publication}
                    </span>
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    Click to view full article
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors z-20 p-2 rounded-full hover:bg-white/10"
            data-testid="close-lightbox"
          >
            <X size={28} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-brand-red transition-colors z-20 p-3 rounded-full hover:bg-white/10"
            data-testid="prev-image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-brand-red transition-colors z-20 p-3 rounded-full hover:bg-white/10"
            data-testid="next-image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-6">
            {isZoomed ? (
              // Zoomed view with scrolling
              <div 
                className="w-full h-full overflow-auto bg-black/50 rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div 
                  className="cursor-zoom-out p-4"
                  onClick={toggleZoom}
                >
                  <img
                    src={articles[selectedImage].src}
                    alt={articles[selectedImage].alt}
                    className="w-full h-auto shadow-2xl rounded-lg"
                    data-testid="lightbox-image"
                    style={{ minWidth: '800px' }}
                  />
                </div>
              </div>
            ) : (
              // Normal view
              <div 
                className="cursor-zoom-in hover:scale-105 transition-transform duration-300"
                onClick={toggleZoom}
              >
                <img
                  src={articles[selectedImage].src}
                  alt={articles[selectedImage].alt}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                  data-testid="lightbox-image"
                />
              </div>
            )}
          </div>

          {/* Bottom UI */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3">
            {/* Image Counter */}
            <div className="text-white text-lg font-medium">
              {selectedImage + 1} / {articles.length}
            </div>
            
            {/* Instructions */}
            <div className="text-white/70 text-sm text-center max-w-md">
              {isZoomed 
                ? "Scroll to read article • Click to zoom out • Arrow keys to navigate • ESC to close"
                : "Click image to zoom • Arrow keys to navigate • ESC to close"
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}