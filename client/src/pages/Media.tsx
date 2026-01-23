import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import media gallery images
import image2011_2 from "../assets/media-gallery/2011-2.jpg";
import image2012_1 from "../assets/media-gallery/2012-1.jpg";
import image2015_1 from "../assets/media-gallery/2015-1.jpg";
import image2016_4 from "../assets/media-gallery/2016-4.jpg";
import image2016_5 from "../assets/media-gallery/2016-5.jpg";
import image2016_6 from "../assets/media-gallery/2016-6.jpg";
import image2017_1 from "../assets/media-gallery/2017-1.jpg";
import image2017_2 from "../assets/media-gallery/2017-2.jpg";
import image2017_3 from "../assets/media-gallery/2017-3.jpeg";
import image2017_7 from "../assets/media-gallery/2017-7.jpg";
import image2017_8 from "../assets/media-gallery/2017-8.jpg";
import image2017_12 from "../assets/media-gallery/2017-12.jpg";

// Import print article preview images
import article1 from "../assets/print-articles/1.jpg";
import article3 from "../assets/print-articles/3.png";
import article4 from "../assets/print-articles/4.png";

// Gallery images array for lightbox functionality
const galleryImages = [
  { src: image2011_2, alt: "Media Appearance 2011", year: "2011" },
  { src: image2012_1, alt: "Media Appearance 2012", year: "2012" },
  { src: image2015_1, alt: "Media Appearance 2015", year: "2015" },
  { src: image2016_4, alt: "Media Appearance 2016", year: "2016" },
  { src: image2016_5, alt: "Media Appearance 2016", year: "2016" },
  { src: image2016_6, alt: "Media Appearance 2016", year: "2016" },
  { src: image2017_1, alt: "Media Appearance 2017", year: "2017" },
  { src: image2017_2, alt: "Media Appearance 2017", year: "2017" },
  { src: image2017_3, alt: "Media Appearance 2017", year: "2017" },
  { src: image2017_7, alt: "Media Appearance 2017", year: "2017" },
  { src: image2017_8, alt: "Media Appearance 2017", year: "2017" },
  { src: image2017_12, alt: "Media Appearance 2017", year: "2017" },
];

export default function Media() {
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
      setSelectedImage((selectedImage + 1) % galleryImages.length);
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
      setIsZoomed(false);
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Touch and keyboard navigation
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    
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

    const handleTouchStart = (e: TouchEvent) => {
      if (selectedImage === null) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (selectedImage === null) return;
      
      const deltaX = e.changedTouches[0].clientX - startX;
      const deltaY = e.changedTouches[0].clientY - startY;
      const minSwipeDistance = 50;

      // Horizontal swipe for navigation
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          prevImage(); // Swipe right to go to previous
        } else {
          nextImage(); // Swipe left to go to next
        }
      }
      // Vertical swipe down to close
      else if (deltaY > minSwipeDistance && Math.abs(deltaX) < minSwipeDistance) {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [selectedImage]);

  return (
    <div className="bg-white text-gray-900">
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-filter backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight text-xl">
            INSTAURA<span className="text-brand-red">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/services" className="hover:text-black text-gray-600">Services</Link>
            <Link href="/verticals" className="hover:text-black text-gray-600">Verticals</Link>
            <Link href="/insights" className="hover:text-black text-gray-600">INsights</Link>
            <Link href="/about" className="text-black font-semibold">About</Link>
            <Link href="/contact" className="hover:text-black text-gray-600">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact" className="hidden sm:inline-block border border-gray-200 px-3 py-1.5 rounded-full text-xs">
              Book a Signal Call
            </Link>
            <Link href="/contact" className="bg-brand-red text-white rounded-full px-4 py-2 text-sm">
              Talk to YAS
            </Link>
          </div>
          <button className="md:hidden border border-gray-200 px-3 py-1.5 rounded-full text-xs">Menu</button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 px-6 py-3 text-sm">
        <div className="max-w-7xl mx-auto text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> /
          <Link href="/about" className="hover:underline">About</Link> /
          <span className="text-gray-900 font-medium">Media</span>
        </div>
      </div>

      {/* HERO */}
      <section id="hero" className="px-6 pt-12 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Signals Heard <span className="text-brand-red">Beyond Boardrooms</span>.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Our work has shaped movements that earned mass-media attention — print, digital, and television.
              When signal is clear, the world listens.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
              </Link>
              <a href="#print-online">
                <Button variant="outline" className="border-gray-900 px-6 py-3 rounded-full">
                  Explore Coverage
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PEDIGREE */}
      <section className="px-6 py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">PEDIGREE</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  18
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  YEARS
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  of Signal practice
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  2500+
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  CLIENTS
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  across 4 continents
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  250+
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  MOVEMENTS
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  breakthrough outcomes
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
            <div className="group text-center rounded-3xl border-2 border-white/40 p-8 bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 hover:border-brand-red/40 hover:bg-white/80 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-brand-red group-hover:text-red-600 transition-colors duration-300 mb-2">
                  $2B+
                </div>
                <div className="text-sm font-bold uppercase text-gray-500 tracking-wider">
                  MOVED
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  capital & value
                </div>
                <div className="w-8 h-1 bg-brand-red/20 group-hover:bg-brand-red mx-auto mt-3 rounded-full transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINT & ONLINE */}
      <section id="print-online" className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Print & Online Coverage</h2>
            <a href="#browse-articles" className="text-sm text-brand-red font-semibold hover:underline">Browse Articles ↓</a>
          </div>

          {/* Logo Rail */}
          <div className="overflow-x-auto mb-6">
            <div className="flex items-center gap-6 min-w-max">
              <div className="h-10 w-36 rounded-lg bg-white border shadow-sm grid place-items-center text-xs text-gray-500">MID-DAY</div>
              <div className="h-10 w-36 rounded-lg bg-white border shadow-sm grid place-items-center text-xs text-gray-500">ENTREPRENEUR</div>
              <div className="h-10 w-36 rounded-lg bg-white border shadow-sm grid place-items-center text-xs text-gray-500">NGƯỜI LAO ĐỘNG</div>
              <div className="h-10 w-36 rounded-lg bg-white border shadow-sm grid place-items-center text-xs text-gray-500">FORBES</div>
              <div className="h-10 w-36 rounded-lg bg-white border shadow-sm grid place-items-center text-xs text-gray-500">ECONOMIC TIMES</div>
              <div className="h-10 w-36 rounded-lg bg-white border shadow-sm grid place-items-center text-xs text-gray-500">CNBC.COM</div>
            </div>
          </div>

          {/* Article Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Mid-Day Article */}
            <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Mid-Day — Feature</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Leading with Purpose: Changemakers Redefining Success in 2025</h3>
              <p className="mt-2 text-sm text-gray-700">Explores visionary leaders who prioritize impact over profit, highlighting Gaurav Shah among changemakers transforming business.</p>
              <a 
                href="https://www.mid-day.com/buzzfeed/article/leading-with-purpose-changemakers-redefining-success-in-2025-6617" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-brand-red font-semibold hover:underline"
                data-testid="article-link-midday"
              >
                Read More →
              </a>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </article>
            {/* Card 2 - Entrepreneur Article */}
            <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Entrepreneur — Column</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Survive a Startup: Don't Consider Failure Shameful!</h3>
              <p className="mt-2 text-sm text-gray-700">Seven critical reasons startups fail and how to avoid them. Gaurav Shah's insights on entrepreneurship survival strategies.</p>
              <a 
                href="https://www.entrepreneur.com/en-in/starting-a-business/survive-a-startup-dont-consider-failure-shameful/252566" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-brand-red font-semibold hover:underline"
                data-testid="article-link-entrepreneur"
              >
                Read More →
              </a>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </article>
            {/* Card 3 - Người Lao Động Article */}
            <article className="group rounded-3xl border-2 border-white/60 p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500">
              <div className="text-xs uppercase text-gray-500">Người Lao Động — Business</div>
              <h3 className="mt-2 font-semibold group-hover:text-brand-red transition-colors duration-300">Phần thưởng đắt giá (Valuable Rewards)</h3>
              <p className="mt-2 text-sm text-gray-700">Singapore art market features unique Obama portrait investment project managed by Deconseil's Gaurav Shah.</p>
              <a 
                href="https://nld.com.vn/thoi-su-quoc-te/phan-thuong-dat-gia-2009120112493285.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-brand-red font-semibold hover:underline"
                data-testid="article-link-nld"
              >
                Read More →
              </a>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BROWSE PRINT ARTICLES */}
      <section id="browse-articles" className="px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Browse Print Articles</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive collection of strategic insights and market intelligence featured in leading publications worldwide.
            </p>
          </div>
          
          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Article Card 1 */}
            <div className="group rounded-3xl border-2 border-white/60 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article1} 
                  alt="Business Times Singapore Article"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-brand-red uppercase tracking-wide">
                    The Business Times
                  </span>
                  <span className="text-xs text-gray-500">
                    Nov 2009
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  S'pore-based firm to advise Obama portrait artist
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  Singapore boutique investment banking advisory firm DeConseil Pte Ltd exclusively advises artist Gilbert Young on Barack Obama portrait deal.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="group rounded-3xl border-2 border-white/60 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article3} 
                  alt="Marketing the Muse Article"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-brand-red uppercase tracking-wide">
                    ASRP Mukesh
                  </span>
                  <span className="text-xs text-gray-500">
                    2009
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  Marketing the muse - This is for you, Mr Obama
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  Artist Gilbert Young and graphic designer create hues of life on canvas with Obama portrait as symbol of hope and change.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>

            {/* Article Card 3 */}
            <div className="group rounded-3xl border-2 border-white/60 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article4} 
                  alt="Singapore Firm Obama Portrait Deal"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-brand-red uppercase tracking-wide">
                    Business News
                  </span>
                  <span className="text-xs text-gray-500">
                    Nov 2009
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  Singapore firm wins deal to sell Obama portrait
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  Singapore investment firm clinches exclusive deal to sell painting of President Barack Obama by renowned African-American artist Gilbert Young.
                </p>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-red to-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Browse Button */}
          <div className="text-center">
            <Link href="/about/media/print-articles">
              <Button 
                className="bg-brand-red hover:bg-red-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="browse-articles-button"
              >
                Browse Articles Gallery →
              </Button>
            </Link>
            <div className="mt-4 text-sm text-gray-500">
              Click to explore all 16 articles with zoom functionality and full navigation
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section id="gallery" className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Photo Gallery of Appearances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl border-2 border-white/60 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:border-brand-red/30 transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    {image.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Capturing moments where signal meets recognition — from boardrooms to broadcast studios.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Click any image to view in full detail with zoom and navigation
            </p>
          </div>
        </div>
      </section>

      {/* CONCLUSION BLOCK */}
      <section className="px-6 py-14 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">Signals recognized. Signals amplified.</h3>
          <p className="text-gray-300 mt-3">
            Media doesn't make us. It reflects the inevitability of our work. From capital breakthroughs to GTM clarity,
            our story has traveled because signal creates movement — and the world takes notice.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact">
              <Button className="bg-brand-red text-white px-6 py-3 rounded-full">Talk to YAS</Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-black px-6 py-3 rounded-full">Book a Signal Call</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE ABOUT INSTAURA */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Explore More About Instaura</h2>
            <Link href="/about" className="text-sm text-brand-red font-semibold hover:underline">
              Back to About
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/about/story" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Our Story</div>
              <h3 className="mt-2 font-semibold group-hover:underline">From Mumbai to Markets Worldwide</h3>
              <p className="mt-2 text-sm text-gray-700">Origins, breakthroughs, and the evolution into Signal Architecture.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Read the Story →</span>
            </Link>
            <Link href="/about/vision" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Vision • Philosophy • Mission</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Signal is the Only Basis</h3>
              <p className="mt-2 text-sm text-gray-700">Why inevitability is designed — not declared.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Explore →</span>
            </Link>
            <Link href="/about/leadership" className="group block rounded-2xl border p-6 bg-white shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase text-gray-500">Leadership</div>
              <h3 className="mt-2 font-semibold group-hover:underline">Gaurav & Hiasmine Shah</h3>
              <p className="mt-2 text-sm text-gray-700">Profiles, philosophy, founder voices, and testimonies.</p>
              <span className="mt-3 inline-block text-sm text-brand-red font-semibold">Meet Leadership →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Instaura Consulting</div>
          <div className="flex gap-5 text-sm">
            <Link href="/legal/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
            <Link href="/legal/terms" className="text-gray-600 hover:text-black">Terms</Link>
            <Link href="/legal/disclaimers" className="text-gray-600 hover:text-black">Disclaimers</Link>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors z-20 p-2 rounded-full hover:bg-white/10"
            data-testid="close-gallery-lightbox"
          >
            <X size={28} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-brand-red transition-colors z-20 p-3 rounded-full hover:bg-white/10"
            data-testid="prev-gallery-image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-brand-red transition-colors z-20 p-3 rounded-full hover:bg-white/10"
            data-testid="next-gallery-image"
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
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-auto shadow-2xl rounded-lg"
                    data-testid="lightbox-gallery-image"
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
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                  data-testid="lightbox-gallery-image"
                />
              </div>
            )}
          </div>

          {/* Bottom UI */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3">
            {/* Image Info */}
            <div className="text-white text-center">
              <div className="text-lg font-medium">
                {galleryImages[selectedImage].alt}
              </div>
              <div className="text-sm text-white/70">
                {galleryImages[selectedImage].year}
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="text-white text-sm font-medium">
              {selectedImage + 1} / {galleryImages.length}
            </div>
            
            {/* Instructions */}
            <div className="text-white/70 text-sm text-center max-w-md">
              {isZoomed 
                ? "Scroll to view full image • Click to zoom out • Swipe left/right to navigate • Swipe down to close"
                : "Swipe left/right to navigate • Swipe down to close"
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}