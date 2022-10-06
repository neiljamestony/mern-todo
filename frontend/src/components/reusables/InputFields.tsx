import { FormEvent, FC } from 'react'

interface Props {
    name: string,
    type: string,
    value: string | number,
    onChange?: (event: FormEvent<HTMLInputElement>) => void
}

const InputFields: FC<Props> = ({ name, type, value, onChange }) => {
  return <input type={type} name={name} value={value} onChange={onChange}/>
}

export default InputFields
