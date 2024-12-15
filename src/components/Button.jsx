import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const Inner = () => (
    <>
      <span>
        <span>Marker</span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span>{children}</span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")}
    >
      <Inner />
    </button>
  );
};

export default Button;
