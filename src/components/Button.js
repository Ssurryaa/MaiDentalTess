const Button = (props) => {
  return (
    <a href={props.link} className="rounded-full bg-gradient-to-b from-lightblue to-darkblue py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg active:bg-darkblue">
      {props.button}
    </a>
  );
};

export default Button;
