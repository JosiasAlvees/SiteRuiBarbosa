import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Escola Estadual Rui Barbosa</h3>
            <p className="text-background/80 mb-4">
              Transformando vidas pelo conhecimento e pela prática desde 1985.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#estrutura"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Estrutura
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="#vida-escolar"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Vida Escolar
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Horário de Atendimento */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <strong>Segunda a Sexta:</strong>
                <br />
                07:00 - 17:00
              </li>
              <li>
                <strong>Sábado:</strong>
                <br />
                08:00 - 12:00
              </li>
              <li>
                <strong>Domingo:</strong>
                <br />
                Fechado
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>
            © {currentYear} Escola Estadual Campestre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
