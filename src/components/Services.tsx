import { motion } from "framer-motion";
import {
  FileSearch,
  TrendingDown,
  Sun,
  Building2,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Energie-audit",
      description:
        "Grondige analyse van uw energieverbruik met concrete besparingsmogelijkheden en een helder actieplan.",
    },
    {
      icon: TrendingDown,
      title: "Kostenoptimalisatie",
      description:
        "Strategisch advies om uw energiecontracten te optimaliseren en verborgen kosten te elimineren.",
    },
    {
      icon: Sun,
      title: "Duurzame Oplossingen",
      description:
        "Van zonnepanelen tot warmtepompen - wij begeleiden u naar een duurzamere bedrijfsvoering.",
    },
    {
      icon: Building2,
      title: "Industrie Consultancy",
      description:
        "Specialistisch advies voor productieprocessen, inclusief energie-efficiënte machines en systemen.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="diensten" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Onze Diensten
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Expertise voor elke energievraag
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van analyse tot implementatie, wij ondersteunen uw bedrijf bij elke
            stap richting energie-efficiëntie.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="font-display text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4 group-hover:gap-2 transition-all"
                  >
                    Meer info
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
