import Image from "next/image"


export default function SobrePage(){
    return(

        <main className="p-8">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-8 text-3xl font-bold">Sobre nós</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 items-center">
                <Image
                src="/logotipo-restaurante.jpg"
                alt="Restaurante"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                />
            </div>

            <div>
                <h2 className="mb-4 text=2xl font-semibold">Bem-vindo ao nosso restaurante</h2>

                <p className="mb-4 text-2xl font-semibold">
                     Somos um restaurante de qualidade, sempre presando o bem-estar e aprovação do cliente!
                </p>
            </div>
        </main>
    )
}