function Footer() {
  return (
    <footer className="bg-black text-white flex w-full p-8 justify-center items-end mt-10 text-center">
      <p>
        Copyright © 2023{" "}
        <a
          href="https://prince-neres.space"
          target="_blank"
          className="hover:text-cyan-500 duration-200"
          rel="noreferrer"
        >
          prince-neres.space.{" "}
        </a>{" "}
        Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
