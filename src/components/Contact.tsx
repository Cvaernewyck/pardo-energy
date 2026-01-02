import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      label: "Adres",
      value: "Kerkhage 28, 8210 Zedelgem",
    },
    {
      icon: Phone,
      label: "Telefoon",
      value: "+32 3 123 45 67",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "roger@pmenergygroup.be",
    },
    {
      icon: Clock,
      label: "Openingsuren",
      value: "24/7",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log(formData);

    try {
      const res = await fetch("https://pardo-energy.vercel.app/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();

      toast({
        title: "Bericht verzonden!",
        description: "Wij nemen zo snel mogelijk contact met u op.",
      });

      form.reset();
    } catch {
      toast({
        title: "Fout",
        description: "Bericht kon niet worden verzonden.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Laten we samenwerken
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Klaar om te besparen op energie? Neem contact op voor een
            vrijblijvend adviesgesprek.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Naam *</Label>
                  <Input id="name" name="name" placeholder="Uw naam" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Bedrijf</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Bedrijfsnaam"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="uw@email.be"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+32 ..."
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Bericht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Vertel ons over uw energievraag..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Verzenden..."
                ) : (
                  <>
                    Verzend bericht
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="font-medium text-foreground">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-primary text-primary-foreground">
              <h3 className="font-display font-semibold text-lg mb-2">
                Gratis Adviesgesprek
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Benieuwd naar uw besparingspotentieel? Plan een vrijblijvend
                gesprek in en ontdek wat wij voor uw bedrijf kunnen betekenen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
