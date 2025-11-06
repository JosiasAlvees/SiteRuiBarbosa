import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import labInformatica from "@/assets/lab-informatica.jpg";
import areaPlantio from "@/assets/area-plantio.jpg";
import quadraEsportiva from "@/assets/quadra-esportiva.jpg";
import refeitorio from "@/assets/refeitorio.jpg";

const aspectosVida = [
  {
    titulo: "Alimentação Saudável",
    descricao: "Refeições balanceadas e nutritivas preparadas com carinho todos os dias.",
    imagem: refeitorio,
  },
  {
    titulo: "Aprendizado Prático",
    descricao: "Laboratórios equipados para colocar a mão na massa e aprender fazendo.",
    imagem: labInformatica,
  },
  {
    titulo: "Esporte e Lazer",
    descricao: "Momentos de descontração e atividade física na nossa quadra poliesportiva.",
    imagem: quadraEsportiva,
  },
  {
    titulo: "Contato com a Natureza",
    descricao: "Práticas em nossa área verde, cultivando conhecimento e sustentabilidade.",
    imagem: areaPlantio,
  },
];

const frases = [
  "Aprender também é viver bem.",
  "Aqui o conhecimento floresce.",
  "Educação que transforma vidas.",
  "Do campo à tecnologia, formamos cidadãos.",
];

const VidaEscolarSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="vida-escolar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vida Escolar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que ensino, oferecemos uma experiência completa de desenvolvimento e bem-estar.
          </p>
        </motion.div>

        {/* Carousel de Imagens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {aspectosVida.map((aspecto, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <div className="relative h-96">
                      <img
                        src={aspecto.imagem}
                        alt={aspecto.titulo}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {aspecto.titulo}
                        </h3>
                        <p className="text-white/90 text-lg">
                          {aspecto.descricao}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>

        {/* Frases Inspiradoras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frases.map((frase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 text-center bg-primary text-primary-foreground hover:shadow-hover transition-smooth group cursor-default">
                <p className="text-lg font-semibold group-hover:scale-105 transition-smooth">
                  "{frase}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VidaEscolarSection;
