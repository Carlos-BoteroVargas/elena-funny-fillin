import Link from 'next/link';
import Image from 'next/image';
import Theatre from '../../public/theatre1.png';
import Stars from '../../public/star1.png';
import Arcade from '../../public/arcade1.png';
import Mixup from '../../public/mixup1.png';
import Museum from '../../public/museum.png';
import './page.css';

export default function Home() {

  return (
    
    <div className="App">
      <div className='welcome'>
        <h1>Welcome to my page!</h1>
        <h3>Choose your story to play now:</h3>
          <div className='inputDiv'>
            <Link href='/museum'>
              <Image 
                src={Museum} 
                alt='Magic Mix-up' 
                height={250} 
                width={268}
              /> 
              <div className='links'>
                Mischief in the Museum
              </div>      
            </Link>
          </div>
          <div>
            <Link href='/mixup'>
              <Image 
                src={Mixup} 
                alt='Magic Mix-up' 
                height={250} 
                width={268}
              /> 
              <div className='links'>
                Magic Mix-up
              </div>      
            </Link>
          </div>
          <div className='inputDiv'>
            <Link href='/theatre'>
              <Image 
                src={Theatre} 
                alt='The Theatre' 
                height={250} 
                width={241}
              /> 
              <div className='links'>
                Adventure in the Theatre
              </div>      
            </Link>
          </div>
          <div className='inputDiv'>
            <Link href='/stars'>
              <Image 
                src={Stars} 
                alt='Wishing upon a star' 
                height={250} 
                width={198}
              /> 
              <div className='links'>
              Wishing upon a star
              </div>      
            </Link>
          </div>
          <div className='inputDiv'>
            <Link href='/arcade'>
              <Image 
                src={Arcade} 
                alt='Danger in the Arcade' 
                height={250} 
                width={244}
              /> 
              <div className='links'>
              Danger in the Arcade
              </div>      
            </Link>
          </div>
      </div>
    </div>
  );
}
