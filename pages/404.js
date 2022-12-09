import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      
      router.push('/'); //Redirect to URL
    }, 5000)
  }, [])//[] triggers (only once) function as soon as page renders

 

    return (
      <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
      </div>
    );

  
}
export default NotFound;