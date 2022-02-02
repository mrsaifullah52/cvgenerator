import Image from 'next/image';
import {useRouter} from 'next/router';
import simple from '../../public/simple.jpg';

const File=()=>{
  const router = useRouter();
  const img = router.query.file;
  

  return(<> 
    <figure className="inline-block rounded-lg m-auto border-2 border-indigo-800 overflow-hidden shadow-lg">
      <Image src={simple}/>
    </figure>
  </>)
}

export default File
