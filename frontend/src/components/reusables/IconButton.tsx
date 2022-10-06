import { FC, FormEvent } from 'react'

interface Props {
    onClick?: (event: FormEvent<HTMLInputElement>) => void
}

const IconButton: FC<Props> = ({ onClick }) => {
  return <div>IconButton</div>
}

export default IconButton;