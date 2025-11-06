import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Computer, Sprout, GraduationCap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const diferenciais = [
  {
    icon: Computer,
    title: "Laboratório de Informática",
    description: "Equipamentos modernos e internet de alta velocidade para aprendizado prático em tecnologia.",
  },
  {
    icon: Sprout,
    title: "Espaço de Plantio",
    description: "Área dedicada para práticas agrícolas e sustentabilidade no curso técnico em cooperativismo.",
  },
  {
    icon: GraduationCap,
    title: "Cursos Técnicos e EJA",
    description: "Formação técnica de qualidade com cursos em Informática, Cooperativismo e EJA para todas as idades.",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Quadra esportiva, alimentação saudável e espaço de convivência que promove bem-estar.",
  },
];

const DiferenciaisSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma escola que valoriza o conhecimento prático, o bem-estar e o desenvolvimento integral dos alunos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-hover transition-smooth bg-card group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
