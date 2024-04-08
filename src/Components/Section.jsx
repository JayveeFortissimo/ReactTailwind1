import Phone from '../assets/Phone.png';

const Section = ({Section="section",...props}) => {
  return (
   <Section {...props}>
     <div className='max-w-xs  flex flex-col gap-7'>
        <h1 className="sm:text-7xl xs:text-4xl sm:text-left xs:text-center font-semibold leading-LineCustome bg-clip-text text-transparent  bg-gradient-to-r from-violet-500 to-fuchsia-500">Hangout anytime, anywhere</h1>
         <p className="text-1xl sm:text-left xs:text-center">Messenger makes it easy and fun to
            stay close to yout favorite people.
         </p>

         <div>
            <form className='xs:text-center sm:text-left'>
                <input type="text" placeholder="Email or phone number" className='bg-slate-200 h-8 px-3 text-left py-3' />
                <div>
                    <input type="text" placeholder="Password"className='bg-slate-200 h-8 px-3 text-left py-3' />
                </div>
                <div id='top'>
                    <button>Log in</button>
                    <span>Forgotten your password?</span>
                </div>
            </form>
         </div>
     </div>


       <img src={Phone} alt="" className='h-vh'/>

     
   </Section>
  )
}

export default Section