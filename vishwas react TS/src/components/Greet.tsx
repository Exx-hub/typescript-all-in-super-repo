export type GreetProps = {
  name: string
  messageCount?: number | string
  isLoggedIn: boolean
  isEnrolled?: boolean  // optional prop
}

function Greet({ name, messageCount = 0, isEnrolled, isLoggedIn }: GreetProps) {
  // const { name, messageCount = 0, isEnrolled, isLoggedIn } = props

  return (
    <div>
      {isLoggedIn ?
        <div>
          <h2>Welcome {name}! You have {messageCount} unread messages.</h2>
          {isEnrolled && <h2>Enrolled</h2>}
        </div>
        :
        <h2>Welcome Guest!</h2>
      }

    </div>
  );
}

export default Greet;
