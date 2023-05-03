function Footer() {
  return (
    <footer className="flex w-full p-10 justify-center items-end">
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