
import Link from 'next/link'
 
 function Home() {
  return (
    <div>
      <h1>welcome to next</h1>
      <Link href='/users'>
      <a>users link</a>
      </Link>
      <hr/>
      <Link href='/posts'>
      <a>all posts</a>
      </Link>
       <h2>user list</h2>


    </div>
  )
}
   
export default Home