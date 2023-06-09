import { motion } from "framer-motion";
import Logo from "../../components/Navbar/Logo";
import Wallpapers from "../Wallpapers";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 justify-center items-center md:w-3/4 lg:w-1/2 px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 1 }}
          className="rounded-lg flex justify-center items-center"
        >
          <Logo w={250} />
        </motion.div>
        <p className="indent-8 text-justify">
          O WallBox é uma aplicação de compartilhamento de papéis de parede para
          desktop que permite aos usuários fazerem upload e compartilhar seus
          papéis de parede favoritos. Os usuários podem criar perfis, pesquisar
          por papéis de parede, por tag ou palavra-chave.
        </p>
      </div>
      <Wallpapers IsPublic={true} />
    </div>
  );
}
