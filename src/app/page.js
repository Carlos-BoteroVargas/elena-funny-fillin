import Link from 'next/link';
// import Image from 'next/image';
// import Theatre from '/theatre1.png';
import './page.css';

export default function Home() {

  return (
    
    <div className="App">
      <div className='welcome'>
        <h1>Welcome to my page!</h1>
        <h3>Choose your story to play now:</h3>
          <div className='inputDiv'>
            {/* <div>
              <Image 
                src='/theatre1.png' 
                alt='The Theatre' 
                height={250} 
                width={241}
                // placeholder='blur'
              />
            </div> */}
            <Link href='/theatre'>Adventure in the Theatre</Link>
          </div>
          <div className='inputDiv'>
            <Link href='/stars'>Wishing upon a star</Link>
          </div>
          <div className='inputDiv'>
            <Link href='/arcade'>Danger in the Arcade</Link>
          </div>
      </div>
    </div>
  );
}
