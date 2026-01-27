import { useEffect } from "react";
import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { useHashLocationEnhanced } from "./hooks/use-hash-location-enhanced";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Verticals from "@/pages/Verticals";
import TechnologyVertical from "@/pages/TechnologyVertical";
import ConsumerProductsVertical from "@/pages/ConsumerProductsVertical";
import HealthcarePharmaVertical from "@/pages/HealthcarePharmaVertical";
import DeepTechAIVertical from "@/pages/DeepTechAIVertical";
import BFSIVertical from "@/pages/BFSIVertical";
import RealEstatePropTechVertical from "@/pages/RealEstatePropTechVertical";
import DefenseSecurityVertical from "@/pages/DefenseSecurityVertical";
import ManufacturingIndustrialVertical from "@/pages/ManufacturingIndustrialVertical";
import EnergyCleanTechVertical from "@/pages/EnergyCleanTechVertical";
import LogisticsMobilityVertical from "@/pages/LogisticsMobilityVertical";
import EducationEdTechVertical from "@/pages/EducationEdTechVertical";
import ConsumerInternetMediaVertical from "@/pages/ConsumerInternetMediaVertical";
import Insights from "@/pages/Insights";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudy1 from "@/pages/case-studies/CaseStudy1";
import CaseStudy2 from "@/pages/case-studies/CaseStudy2";
import CaseStudy3 from "@/pages/case-studies/CaseStudy3";
import CaseStudy4 from "@/pages/case-studies/CaseStudy4";
import CaseStudy5 from "@/pages/case-studies/CaseStudy5";
import CaseStudy6 from "@/pages/case-studies/CaseStudy6";
import CaseStudy7 from "@/pages/case-studies/CaseStudy7";
import CaseStudy8 from "@/pages/case-studies/CaseStudy8";
import CaseStudy9 from "@/pages/case-studies/CaseStudy9";
import CaseStudy10 from "@/pages/case-studies/CaseStudy10";
import CaseStudy11 from "@/pages/case-studies/CaseStudy11";
import CaseStudy12 from "@/pages/case-studies/CaseStudy12";
import CaseStudy13 from "@/pages/case-studies/CaseStudy13";
import CaseStudy14 from "@/pages/case-studies/CaseStudy14";
import CaseStudy15 from "@/pages/case-studies/CaseStudy15";
import CaseStudy16 from "@/pages/case-studies/CaseStudy16";
import CaseStudy17 from "@/pages/case-studies/CaseStudy17";
import CaseStudy18 from "@/pages/case-studies/CaseStudy18";
import CaseStudy19 from "@/pages/case-studies/CaseStudy19";
import CaseStudy20 from "@/pages/case-studies/CaseStudy20";
import CaseStudy21 from "@/pages/case-studies/CaseStudy21";
import CaseStudy22 from "@/pages/case-studies/CaseStudy22";
import CaseStudy23 from "@/pages/case-studies/CaseStudy23";
import CaseStudy24 from "@/pages/case-studies/CaseStudy24";
import CaseStudy25 from "@/pages/case-studies/CaseStudy25";
import CaseStudy26 from "@/pages/case-studies/CaseStudy26";
import CaseStudy27 from "@/pages/case-studies/CaseStudy27";
import CaseStudy28 from "@/pages/case-studies/CaseStudy28";
import CaseStudy29 from "@/pages/case-studies/CaseStudy29";
import CaseStudy30 from "@/pages/case-studies/CaseStudy30";
import CaseStudy31 from "@/pages/case-studies/CaseStudy31";
import CaseStudy32 from "@/pages/case-studies/CaseStudy32";
import CaseStudy33 from "@/pages/case-studies/CaseStudy33";
import CaseStudy34 from "@/pages/case-studies/CaseStudy34";
import CaseStudy35 from "@/pages/case-studies/CaseStudy35";
import CaseStudy36 from "@/pages/case-studies/CaseStudy36";
import CaseStudy37 from "@/pages/case-studies/CaseStudy37";
import CaseStudy38 from "@/pages/case-studies/CaseStudy38";
import CaseStudy39 from "@/pages/case-studies/CaseStudy39";
import CaseStudy40 from "@/pages/case-studies/CaseStudy40";
import CaseStudy41 from "@/pages/case-studies/CaseStudy41";
import CaseStudy42 from "@/pages/case-studies/CaseStudy42";
import CaseStudy43 from "@/pages/case-studies/CaseStudy43";
import CaseStudy44 from "@/pages/case-studies/CaseStudy44";
import CaseStudy45 from "@/pages/case-studies/CaseStudy45";
import CaseStudy46 from "@/pages/case-studies/CaseStudy46";
import CaseStudy47 from "@/pages/case-studies/CaseStudy47";
import CaseStudy48 from "@/pages/case-studies/CaseStudy48";
import WhitePapers from "@/pages/WhitePapers";
import WhitePaperDetail from "@/pages/WhitePaperDetail";
import ClaritySeries from "@/pages/ClaritySeries";
import ClaritySeriesDetail from "@/pages/ClaritySeriesDetail";
import About from "@/pages/About";
import OurStory from "@/pages/OurStory";
import Vision from "@/pages/Vision";
import Leadership from "@/pages/Leadership";
import YAS from "@/pages/YAS";
import Media from "@/pages/Media";
import PrintArticles from "@/pages/PrintArticles";
import SocialResponsibility from "@/pages/SocialResponsibility";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import SignalArchitecture from "@/pages/SignalArchitecture";
import GTMFunnels from "@/pages/GTMFunnels";
import FundRaising from "@/pages/FundRaising";
import StrategyConsulting from "@/pages/StrategyConsulting";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import Disclaimer from "@/pages/Disclaimer";
import NotFound from "@/pages/not-found";

function RouterContent() {
  const [location] = useLocation();
  console.log("App: Current Location:", location);

  useEffect(() => {
    // Handle scroll to anchor after route change
    // Since we are using hash routing, the "real" hash might be "#/route#anchor"
    // The wouter location hook now returns just "/route"
    // We need to look at window.location.hash to find the second #

    const fullHash = window.location.hash;
    const parts = fullHash.split('#');
    // parts[0] is empty (before first #), parts[1] is route, parts[2] is anchor

    if (parts.length > 2) {
      const anchorId = parts[2];
      if (anchorId) {
        // Tiny timeout to allow DOM to render
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return;
      }
    }

    // Default behavior: scroll to top if no anchor
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          {/* ... all other routes ... */}
          <Route path="/verticals" component={Verticals} />
          <Route path="/verticals/technology" component={TechnologyVertical} />
          <Route path="/verticals/consumer-products" component={ConsumerProductsVertical} />
          <Route path="/verticals/healthcare-pharma" component={HealthcarePharmaVertical} />
          <Route path="/verticals/deeptech-ai" component={DeepTechAIVertical} />
          <Route path="/verticals/bfsi" component={BFSIVertical} />
          <Route path="/verticals/real-estate-proptech" component={RealEstatePropTechVertical} />
          <Route path="/verticals/defense-security" component={DefenseSecurityVertical} />
          <Route path="/verticals/manufacturing-industrial" component={ManufacturingIndustrialVertical} />
          <Route path="/verticals/energy-cleantech" component={EnergyCleanTechVertical} />
          <Route path="/verticals/logistics-mobility" component={LogisticsMobilityVertical} />
          <Route path="/verticals/education-edtech" component={EducationEdTechVertical} />
          <Route path="/verticals/consumer-internet-media" component={ConsumerInternetMediaVertical} />
          <Route path="/insights" component={Insights} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-studies/1" component={CaseStudy1} />
          <Route path="/case-studies/2" component={CaseStudy2} />
          <Route path="/case-studies/3" component={CaseStudy3} />
          <Route path="/case-studies/4" component={CaseStudy4} />
          <Route path="/case-studies/5" component={CaseStudy5} />
          <Route path="/case-studies/6" component={CaseStudy6} />
          <Route path="/case-studies/7" component={CaseStudy7} />
          <Route path="/case-studies/8" component={CaseStudy8} />
          <Route path="/case-studies/9" component={CaseStudy9} />
          <Route path="/case-studies/10" component={CaseStudy10} />
          <Route path="/case-studies/11" component={CaseStudy11} />
          <Route path="/case-studies/12" component={CaseStudy12} />
          <Route path="/case-studies/13" component={CaseStudy13} />
          <Route path="/case-studies/14" component={CaseStudy14} />
          <Route path="/case-studies/15" component={CaseStudy15} />
          <Route path="/case-studies/16" component={CaseStudy16} />
          <Route path="/case-studies/17" component={CaseStudy17} />
          <Route path="/case-studies/18" component={CaseStudy18} />
          <Route path="/case-studies/19" component={CaseStudy19} />
          <Route path="/case-studies/20" component={CaseStudy20} />
          <Route path="/case-studies/21" component={CaseStudy21} />
          <Route path="/case-studies/22" component={CaseStudy22} />
          <Route path="/case-studies/23" component={CaseStudy23} />
          <Route path="/case-studies/24" component={CaseStudy24} />
          <Route path="/case-studies/25" component={CaseStudy25} />
          <Route path="/case-studies/26" component={CaseStudy26} />
          <Route path="/case-studies/27" component={CaseStudy27} />
          <Route path="/case-studies/28" component={CaseStudy28} />
          <Route path="/case-studies/29" component={CaseStudy29} />
          <Route path="/case-studies/30" component={CaseStudy30} />
          <Route path="/case-studies/31" component={CaseStudy31} />
          <Route path="/case-studies/32" component={CaseStudy32} />
          <Route path="/case-studies/33" component={CaseStudy33} />
          <Route path="/case-studies/34" component={CaseStudy34} />
          <Route path="/case-studies/35" component={CaseStudy35} />
          <Route path="/case-studies/36" component={CaseStudy36} />
          <Route path="/case-studies/37" component={CaseStudy37} />
          <Route path="/case-studies/38" component={CaseStudy38} />
          <Route path="/case-studies/39" component={CaseStudy39} />
          <Route path="/case-studies/40" component={CaseStudy40} />
          <Route path="/case-studies/41" component={CaseStudy41} />
          <Route path="/case-studies/42" component={CaseStudy42} />
          <Route path="/case-studies/43" component={CaseStudy43} />
          <Route path="/case-studies/44" component={CaseStudy44} />
          <Route path="/case-studies/45" component={CaseStudy45} />
          <Route path="/case-studies/46" component={CaseStudy46} />
          <Route path="/case-studies/47" component={CaseStudy47} />
          <Route path="/case-studies/48" component={CaseStudy48} />
          <Route path="/white-papers" component={WhitePapers} />
          <Route path="/white-papers/:slug" component={WhitePaperDetail} />
          <Route path="/clarity-series" component={ClaritySeries} />
          <Route path="/clarity-series/:slug" component={ClaritySeriesDetail} />
          <Route path="/about" component={About} />
          <Route path="/about/story" component={OurStory} />
          <Route path="/about/vision" component={Vision} />
          <Route path="/about/leadership" component={Leadership} />
          <Route path="/about/yas" component={YAS} />
          <Route path="/about/media" component={Media} />
          <Route path="/about/media/print-articles" component={PrintArticles} />
          <Route path="/about/social-responsibility" component={SocialResponsibility} />
          <Route path="/about/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/signal-architecture" component={SignalArchitecture} />
          <Route path="/gtm-funnels" component={GTMFunnels} />
          <Route path="/fund-raising" component={FundRaising} />
          <Route path="/strategy-consulting" component={StrategyConsulting} />
          <Route path="/legal/terms" component={TermsOfService} />
          <Route path="/legal/privacy" component={PrivacyPolicy} />
          <Route path="/legal/cookie" component={CookiePolicy} />
          <Route path="/legal/refund" component={RefundPolicy} />
          <Route path="/legal/disclaimer" component={Disclaimer} />
          <Route>
            {(params) => {
              const brokenPath = window.location.pathname;
              const redirectUrl = `/contact?ask_ai=I was trying to visit ${brokenPath} but it seems to be missing. Can you help me find what I'm looking for?`;
              window.location.href = redirectUrl;
              return null;
            }}
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

import { ChatbotProvider } from "@/context/ChatbotContext";
import ChatbotModal from "@/components/ChatbotModal";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ChatbotProvider>
          <Toaster />
          <WouterRouter hook={useHashLocationEnhanced}>
            <RouterContent />
          </WouterRouter>
          <ChatbotModal />
        </ChatbotProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
