interface IBasicPropsProps {
  headerText: string;
  defaultProp?: string;
  optionalProp?: string;
}

function BasicProps({
  headerText,
  defaultProp = "default ito",
  optionalProp,
}: IBasicPropsProps) {
  return (
    <div>
      <h1>{headerText}</h1>
      <h2>{defaultProp}</h2>
      <h3>{optionalProp}</h3>
    </div>
  );
}

export default BasicProps;
