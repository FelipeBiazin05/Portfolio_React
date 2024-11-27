import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Felipe Biazin</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        FelipeBiazin05
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Full Stack Java em formação.
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
