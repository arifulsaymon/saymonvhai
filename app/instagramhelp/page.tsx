import SupportForm from '@/components/SupportForm';
import {getPlatform} from '@/lib/platforms';

export default function Page(){
  const platform=getPlatform('instagramhelp')!;
  return <SupportForm platform={platform}/>;
}
