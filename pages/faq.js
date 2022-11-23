import Head from "next/head";
import Link from "next/link";
import PageTitle from "../src/components/patterns/Head";

// SSG - Static Site Generation (site estático, que não carrega nada, somente conteúdo pronto)
// SSR - Server Side Rendering (site gerado no servidor e enviado pronto (ou quase) para o cliente)
// ISG - Incremental Static Generation (mistura os dois)


// export async function getServerSideProps() { // Roda toda vez que a página é acessada (em modo dev roda a cada acesso)
// export async function getStaticProps() { // Roda apenas quando você faz build (em modo dev roda a cada acesso)

export async function getServerSideProps() {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FAQ_API_URL)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return response;
        });

    return {
        props: {
            faq
        }, // will be passed to the page component as props
    }
}

export default function FAQPage({ faq }) {

    return (
        <div>
            <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
            <h1>Alura Cases - FAQ</h1>
            <Link href="/">Ir para Home</Link>
            <ul>
                {faq.map(({ answer, question }) =>
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                )}
            </ul>
        </div>
    )
}