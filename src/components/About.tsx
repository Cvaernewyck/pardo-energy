import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section
      id="over-ons"
      className="section-padding bg-primary text-primary-foreground"
    >
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Over Ons
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Gedreven door duurzaamheid en resultaat
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              EnergiePro werd opgericht met één doel: Belgische bedrijven helpen
              om slimmer met energie om te gaan. Wat begon als een klein
              adviesbureau is uitgegroeid tot een toonaangevend
              consultancybedrijf met een team van gecertificeerde
              energie-experts.
            </p>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Wij geloven dat duurzaam ondernemen en kostenefficiëntie hand in
              hand gaan. Daarom combineren wij technische expertise met een
              pragmatische aanpak die altijd gericht is op concrete resultaten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Onze Missie
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Elk Belgisch bedrijf toegang geven tot professioneel
                    energie-advies, ongeacht de grootte. Wij streven naar een
                    toekomst waarin duurzaamheid de norm is.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Onze Visie
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    Een Belgische economie waarin bedrijven niet alleen
                    winstgevend zijn, maar ook een positieve impact hebben op
                    onze planeet en toekomstige generaties.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
