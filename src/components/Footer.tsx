import { Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                P&M Energy Group
              </span>
            </a>
            <p className="text-background/70 leading-relaxed max-w-sm">
              Uw partner voor professioneel energie-advies. Wij helpen KMO's en
              industriële bedrijven besparen en verduurzamen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Snelle Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#diensten"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Diensten
                </a>
              </li>
              <li>
                <a
                  href="#waarom-wij"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Waarom Wij
                </a>
              </li>
              <li>
                <a
                  href="#over-ons"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Over Ons
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Diensten
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#diensten"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Energie-audit
                </a>
              </li>
              <li>
                <a
                  href="#diensten"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Kostenoptimalisatie
                </a>
              </li>
              <li>
                <a
                  href="#diensten"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Duurzame Oplossingen
                </a>
              </li>
              <li>
                <a
                  href="#diensten"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Industrie Consultancy
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} P&M Energy Group. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              Privacybeleid
            </a>
            <a
              href="#"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
