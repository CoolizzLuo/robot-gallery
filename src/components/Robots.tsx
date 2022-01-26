import { FC } from "react"


interface RobotProps {
  id: number,
  name: string,
  email: string,
}

const Robot: FC<RobotProps> = ({ id, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

export default Robot
