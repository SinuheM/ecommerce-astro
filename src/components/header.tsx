import AstroLogo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="container flex justify-between mx-auto py-10 w-full">
      <a href="/" title="Car Product's">
        <img src={AstroLogo.src} alt="Car Product's" className="w-12" />
      </a>
    </header>
  );
};
