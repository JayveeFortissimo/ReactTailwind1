import Logo from '../assets/Logo.png';



const Header = ({Header ="header",...props}) => {
  return (
   <Header {...props}>
       <nav className='flex items-center justify-between w-3/5'>
            <img src={Logo} alt="" className='h-12'/>
       {/*////HumburgerBat/////////*/}
            <div>
               <div></div>
               <div></div>
               <div></div>
            </div>
        {/*//////Links////??*/}
     
     <div className='flex gap-12 font-semibold md:invisible lg:visible sm:invisible xs:invisible'>
        <a href="">Features</a>
        <a href="">Desktop App</a>
        <a href="">Privacy & Safety</a>
        <a href="">For Developers</a>
     </div>

       </nav>
   </Header>
  )
}

export default Header