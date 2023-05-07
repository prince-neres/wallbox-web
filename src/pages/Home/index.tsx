import Logo from "../../components/Navbar/Logo";

export default function Home() {
  return (
    <div className="flex-grow flex justify-center">
      <div className="flex flex-col gap-5 justify-center items-center md:w-3/4 lg:w-1/2 px-10">
        <div className="p-3 bg-black">
          <Logo w={10} />
        </div>
        <p className="indent-8 text-justify">
          O WallBox é uma aplicação de compartilhamento de papéis de parede para
          desktop qu permite que os usuários façam upload e compartilhem suas
          imagens favoritas para uso pessoal e de outras pessoas. Os usuários
          podem criar perfis, pesquisar por papéis de parede por tag ou
          palavra-chave.
        </p>
      </div>
    </div>
  );
}
