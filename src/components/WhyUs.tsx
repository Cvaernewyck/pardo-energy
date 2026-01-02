import { motion } from "framer-motion";
import { Award, Users, Clock, Shield } from "lucide-react";

const WhyUs = () => {
  const stats = [
    { number: "500+", label: "Tevreden Klanten" },
    { number: "15+", label: "Jaar Ervaring" },
    { number: "€2M+", label: "Bespaard voor klanten" },
    { number: "98%", label: "Klanttevredenheid" },
  ];

  const features = [
    {
      icon: Award,
      title: "Gecertificeerde Experts",
      description:
        "Ons team bestaat uit erkende energie-adviseurs met jarenlange ervaring in diverse sectoren.",
    },
    {
      icon: Users,
      title: "Persoonlijke Aanpak",
      description:
        "Elk bedrijf is uniek. Wij leveren maatwerkoplossingen die passen bij uw specifieke situatie.",
    },
    {
      icon: Clock,
      title: "Snelle Resultaten",
      description:
        "Dankzij onze efficiënte werkwijze ziet u binnen enkele weken al de eerste besparingen.",
    },
    {
      icon: Shield,
      title: "Onafhankelijk Advies",
      description:
        "Wij zijn niet gebonden aan leveranciers en geven altijd eerlijk en objectief advies.",
    },
  ];

  return (
    <section id="waarom-wij" className="section-padding bg-background">
      <div className="container-max">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-secondary"
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Waarom EnergiePro
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Uw vertrouwde partner in{" "}
              <span className="text-primary">energie-advies</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Met meer dan 15 jaar ervaring in de Belgische markt begrijpen wij
              de uitdagingen waar KMO's en industriële bedrijven mee kampen.
              Onze onafhankelijke positie garandeert advies dat volledig in uw
              belang is.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-soft transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
