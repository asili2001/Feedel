import Logo from '../assets/images/logo.png'
const HeaderComp = () =>{
    return(
        <section className="flex flex-row justify-around items-center w-full h-20 px-5 py-2">
            <div className='h-full w-full '>
                <img src={Logo} alt="" className='h-full'/>
            </div>
            <ul className='flex items-center justify-end gap-3 h-full w-full'>
                <li>Hem</li>
                <li>Om Oss</li>
                <li>Kontakt</li>
            </ul>

        </section>
    )
}
export default HeaderComp;