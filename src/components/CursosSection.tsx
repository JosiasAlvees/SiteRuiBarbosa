import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cursoInformatica from "@/assets/curso-informatica.jpg";
import cursoCooperativismo from "@/assets/curso-cooperativismo.jpg";
import cursoEja from "@/assets/curso-eja.jpg";
import cursoEmti from "@/assets/curso-emti.jpg";

const cursos = [
  {
    title: "Técnico em Informática para Internet",
    description: "Formação completa em desenvolvimento web, programação, redes de computadores e design digital. Prepare-se para o mercado de tecnologia com ensino prático e atualizado.",
    image: cursoInformatica,
    duracao: "3 anos",
  },
  {
    title: "Técnico em Cooperativismo",
    description: "Aprenda sobre gestão rural, práticas agrícolas sustentáveis, cooperativismo e empreendedorismo no campo. Teoria e prática em nossa área de cultivo.",
    image: cursoCooperativismo,
    duracao: "3 anos",
  },
  {
    title: "EJA - Educação de Jovens e Adultos",
    description: "Conclusão do ensino médio para jovens e adultos que não puderam estudar na idade regular. Horários flexíveis e metodologia adaptada para quem trabalha.",
    image: cursoEja,
    duracao: "1,5 anos",
  },
  {
    title: "EMTI - Ensino Médio Técnico Integrado",
    description: "Ensino médio completo com preparação intensiva para o ENEM e vestibulares. Formação acadêmica sólida voltada para ingresso no ensino superior.",
    image: cursoEmti,
    duracao: "3 anos",
  },
];

const CursosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="cursos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formação técnica de qualidade que prepara você para o mercado de trabalho e para a vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cursos.map((curso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-hover transition-smooth">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={curso.image}
                    alt={curso.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {curso.duracao}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {curso.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {curso.description}
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark transition-smooth"
                    onClick={() => {
                      const element = document.querySelector("#contato");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Saiba mais
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CursosSection;
