import Link from 'next/link';
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ninjas}) => {
  console.log(ninjas);
    return ( 
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
        <div>
            <h1>Ninjas </h1>
            {ninjas.map(ninja => (
              <Link href={"ninjas/" + ninja.id} key={ninja.id}>
                
                  <h3>{ ninja.name }</h3>
                
              </Link>
            ))}
        </div>
    </>
    );
}
 
export default Ninjas;