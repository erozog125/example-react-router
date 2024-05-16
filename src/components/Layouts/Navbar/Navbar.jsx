import { ItemNavbar } from '../../ItemNavbar/ItemNavbar'


export const Navbar = () => {
  return(
    <nav className='w-3/4 h-full flex'>
      <ul className='w-full flex justify-center items-center'>
        <ItemNavbar route='/' content='Inicio' />        
        <ItemNavbar route='/aboutme' content='Acerca de Mi' />
        <ItemNavbar route='/portfolio' content='Mi Portafolio' />
        <ItemNavbar route='contactme' content='Contáctame' />
        <ItemNavbar route='*' content='fakes Routes' />
      </ul>
    </nav>
  )
}
