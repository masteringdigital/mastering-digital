import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import StrategyService from "./pages/StrategyService";
import WebDesignService from "./pages/WebDesignService";
import AIService from "./pages/AIService";
import Industries from "./pages/Industries";
import WhoWeServe from "./pages/WhoWeServe";
import HomeServices from "./pages/HomeServices";
import Ecommerce from "./pages/Ecommerce";
import RealEstate from "./pages/RealEstate";
import SEOService from "./pages/SEOService";
import PPCService from "./pages/PPCService";
import MetaAdsService from "./pages/MetaAdsService";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import ThankYou from "./pages/ThankYou";
import CMSAdmin from "./pages/CMSAdmin";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/services/strategy"} component={StrategyService} />
      <Route path={"/services/web-design"} component={WebDesignService} />
      <Route path={"/services/ai-implementation"} component={AIService} />
      <Route path={"/services/seo"} component={SEOService} />
      <Route path={"/services/ppc"} component={PPCService} />
      <Route path={"/services/meta-ads"} component={MetaAdsService} />
      <Route path={"/industries"} component={Industries} />
      <Route path={"/who-we-serve"} component={WhoWeServe} />
      <Route path={"/who-we-serve/home-services"} component={HomeServices} />
      <Route path={"/who-we-serve/ecommerce"} component={Ecommerce} />
      <Route path={"/who-we-serve/real-estate"} component={RealEstate} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/results"} component={Results} />
      <Route path={"/thank-you"} component={ThankYou} />
      <Route path={"/services/ai"} component={AIService} />
      <Route path={"/admin/cms"} component={CMSAdmin} />
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
