const LogoWhite = ({ classNames = "text-3xl" }: { classNames?: string }) => {
  return (
    <h1
      className={`animate-text bg-gradient-to-r from-gray-50 via-blue-300 to-gray-50 bg-clip-text text-transparent font-black ${classNames}`}
    >
      Your Logo
    </h1>
  );
};

const Logo = ({ classNames = "text-3xl" }: { classNames?: string }) => {
  return (
    <h1
      className={`p-4 animate-text bg-gradient-to-r from-blue-800 via-slate-900 to-blue-800 bg-clip-text text-transparent font-black ${classNames}`}
    >
      Your Logo
    </h1>
  );
};

export { LogoWhite, Logo };
