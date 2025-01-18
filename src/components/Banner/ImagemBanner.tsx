import Image from 'next/image'

export default function ImagemBanner() {
    return (
        <div className='flex items-center gap-10 w-full mt-10'>
           <div className='bg-[#2978B5] h-1 w-full'></div>
           <Image
                src="/images/fotoPerfil.jpeg"
                alt="Foto de Perfil Mateus Barboza Martins"
                width={200}
                height={200}
                className='rounded-full'
            />
           <div className='bg-[#2978B5] h-1 w-full'></div>
        </div>
    )
}