import AstroLogo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="container flex justify-between mx-auto md:py-10 py-4 w-full">
      <a href="/" title="Car Product's">
        <img src={AstroLogo.src} alt="Car Product's" className="md:w-12 w-6" />
      </a>
    </header>
  );
};
