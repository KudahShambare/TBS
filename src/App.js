import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import News from "./Pages/News";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/services" component={Services} />
          <Route path="/careers" component={Careers} />
          <Route path="/news" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
