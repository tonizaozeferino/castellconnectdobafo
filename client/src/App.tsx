import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/services/Services";
import Webdesign from "@/pages/services/Webdesign";
import SEO from "@/pages/services/SEO";
import Social from "@/pages/services/Social";
import Email from "@/pages/services/Email";
import Voice from "@/pages/services/Voice";
import KIVisuals from "@/pages/services/KIVisuals";
import Ads from "@/pages/services/Ads";
import Industries from "@/pages/industries/Industries";
import Handwerk from "@/pages/industries/Handwerk";
import Gastro from "@/pages/industries/Gastro";
import Dienste from "@/pages/industries/Dienste";
import Region from "@/pages/industries/Region";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Analysis from "@/pages/Analysis";
import Portal from "@/pages/Portal";
import FAQ from "@/pages/FAQ";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Services */}
        <Route path="/leistungen" component={Services} />
        <Route path="/leistungen/webdesign" component={Webdesign} />
        <Route path="/leistungen/seo" component={SEO} />
        <Route path="/leistungen/social" component={Social} />
        <Route path="/leistungen/email" component={Email} />
        <Route path="/leistungen/voice" component={Voice} />
        <Route path="/leistungen/ki-visuals" component={KIVisuals} />
        <Route path="/leistungen/ads" component={Ads} />
        
        {/* Industries */}
        <Route path="/branchen" component={Industries} />
        <Route path="/branchen/handwerk" component={Handwerk} />
        <Route path="/branchen/gastro" component={Gastro} />
        <Route path="/branchen/dienste" component={Dienste} />
        <Route path="/branchen/regionen/:stadt" component={Region} />
        
        {/* Other Pages */}
        <Route path="/ueber-uns" component={About} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/analyse" component={Analysis} />
        <Route path="/portal" component={Portal} />
        <Route path="/faq" component={FAQ} />
        <Route path="/rechtliches" component={Legal} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
