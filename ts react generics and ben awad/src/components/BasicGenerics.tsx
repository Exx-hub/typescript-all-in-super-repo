export interface IBasicGenericsProps {}

function BasicGenerics(props: IBasicGenericsProps) {
  const user = {
    firstName: "Test",
    lastName: "User",
  };

  const thing = {
    something: "something",
    anything: "anything",
  };

  const getValue = <T extends Record<string, string>>(data: T, key: keyof T) =>
    data[key];

  const firstName = getValue(user, "firstName");
  console.log(firstName);

  //   const anything = getValue(user, "anything"); // error because there is not anything key in user object

  const anything = getValue(thing, "anything"); // if thing object is passed removes error
  console.log(anything);

  type MyUselessType<T extends unknown> = T;

  type String = string;

  let obviousString = String;
  let myUselessString: MyUselessType<string>;

  let myUselessNumber: MyUselessType<number>;

  // ============================================================  //

  const myString = "alvin";
  const myUselessFunction = <T extends unknown>(input: T) => input;

  myUselessFunction(myString); // implicitly accepts and returns type string
  //   myUselessFunction<number>(myString);
  myUselessFunction<number>(2); // explicitly accepts and returns a number

  return <div>BasicGenerics</div>;
}

export default BasicGenerics;
