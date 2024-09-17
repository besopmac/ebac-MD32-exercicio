import { useNavigate } from 'react-router-dom'
import * as S from './styles'

type Props = {
  showButton: boolean
}

const Sidebar = ({ showButton }: Props) => {
  const navigate = useNavigate()
  
  return (
    <S.Aside>
      {showButton &&
        <S.Button type="button" onClick={() => navigate('/')}>
          Voltar para a lista
        </S.Button>
      }
    </S.Aside>
  )
}

export default Sidebar