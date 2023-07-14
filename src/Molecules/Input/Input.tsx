interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <input type="text" placeholder={placeholder} />;
};
