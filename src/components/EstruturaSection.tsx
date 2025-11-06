import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import labInformatica from "@/assets/lab-informatica.jpg";
import areaPlantio from "@/assets/area-plantio.jpg";
import quadraEsportiva from "@/assets/quadra-esportiva.jpg";
import refeitorio from "@/assets/refeitorio.jpg";

const estruturas = [
  {
    title: "Laboratório de Informática",
    description: "Laboratório completo com computadores modernos, internet de alta velocidade e softwares atualizados para o aprendizado prático em tecnologia.",
    image: labInformatica,
  },
  {
    title: "Área de Cultivo",
    description: "Espaço amplo dedicado às práticas agrícolas do curso técnico em cooperativismo, com hortas e plantações para aprendizado sustentável.",
    image: areaPlantio,
  },
  {
    title: "Quadra Poliesportiva",
    description: "Quadra coberta e equipada para práticas esportivas, educação física e eventos escolares, promovendo saúde e integração.",
    image: quadraEsportiva,
  },
  {
    title: "Refeitório",
    description: "Refeitório amplo e limpo, oferecendo alimentação saudável e balanceada preparada com cuidado para nossos alunos.",
    image: refeitorio,
  },
];

const EstruturaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="estrutura" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Estrutura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ambientes modernos e bem equipados para proporcionar a melhor experiência de aprendizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {estruturas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-hover transition-smooth">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstruturaSection;
