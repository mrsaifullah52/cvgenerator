import {useRouter} from 'next/router';
import Header from '../components/header';

const Cvform = ()=>{
  const router = useRouter();
  const {page} = router.query;

  return <>
    <Header/>
    page: {page}
  </>
}

export default Cvform