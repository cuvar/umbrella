interface InputProps {
  name: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: number;
  disableResize?: boolean;
}

function Input(props: InputProps) {
  return <textarea name={props.name} rows={props.rows} cols={props.cols} className={'border border-gray-300 rounded-lg py-2 px-2 ' + (props.disableResize && ' resize-none') + ' ' + props.className} placeholder={props.placeholder} />;
}

export default Input;
