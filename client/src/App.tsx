import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import StrategyService from "./pages/StrategyService";
import StrategyChannelMarketing from "./pages/StrategyChannelMarketing";

import AIService from "./pages/AIService";
import AIImplementation from "./pages/AIImplementation";
import Industries from "./pages/Industries";
import WhoWeServe from "./pages/WhoWeServe";
import HomeServices from "./pages/HomeServices";
import Ecommerce from "./pages/Ecommerce";
import RealEstate from "./pages/RealEstate";
import SEOService from "./pages/SEOService";
import SEO from "./pages/SEO";
import PPCService from "./pages/PPCService";
import GoogleAds from "./pages/GoogleAds";
import MetaAdsService from "./pages/MetaAdsService";
import MetaAds from "./pages/MetaAds";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import ThankYou from "./pages/ThankYou";
import CMSAdmin from "./pages/CMSAdmin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FreeTools from "./pages/FreeTools";
import FreeMarketingAudit from "./pages/FreeMarketingAudit";
import FreeSeoSnapshot from "./pages/FreeSeoSnapshot";
import FreeAiVisibilityReport from "./pages/FreeAiVisibilityReport";
import WebDesign from "./pages/WebDesign";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      {/* More specific service routes MUST come before generic ones */}
      <Route path={"/services/strategy-channel-marketing"} component={StrategyChannelMarketing} />
      <Route path={"/services/ai-implementation"} component={AIImplementation} />
      <Route path={"/services/google-ads"} component={GoogleAds} />
      <Route path={"/services/meta-ads"} component={MetaAds} />
      <Route path={"/services/seo-services"} component={SEOService} />
      <Route path={"/services/meta-ads-service"} component={MetaAdsService} />
      {/* Generic service routes */}
        <Route path={"services/strategy"} component={StrategyService} />
      <Route path={"web-design"} component={WebDesign} />
      <Route path={"services/ai"} component={AIService} />
      <Route path={"services/ppc"} component={GoogleAds} />
      <Route path={"services/seo"} component={SEO} />
      {/* Who We Serve routes */}
      <Route path={"/who-we-serve"} component={WhoWeServe} />
      <Route path={"/who-we-serve/home-services"} component={HomeServices} />
      <Route path={"/who-we-serve/ecommerce"} component={Ecommerce} />
      <Route path={"/who-we-serve/real-estate"} component={RealEstate} />
      {/* Other routes */}
      <Route path={"/industries"} component={Industries} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/results"} component={Results} />
      <Route path={"/thank-you"} component={ThankYou} />
      <Route path={"/admin/cms"} component={CMSAdmin} />
      {/* Blog routes */}
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      {/* Free Tools (FITD) routes */}
      <Route path={"/free-tools"} component={FreeTools} />
      <Route path={"/free-marketing-audit"} component={FreeMarketingAudit} />
      <Route path={"/free-seo-snapshot"} component={FreeSeoSnapshot} />
      <Route path={"/free-ai-visibility-report"} component={FreeAiVisibilityReport} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
