// @ts-nocheck

interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

function Input(props: InputProps) {
  return (
    <input
      name={props.name}
      type={props.type ?? "text"}
      className={
        "border border-gray-300 rounded-lg py-2 px-2" + " " + props.className
      }
      placeholder={props.placeholder}
    />
  );
}

export default Input;
