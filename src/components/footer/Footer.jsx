import s from'./footer.module.scss';
import icons from '@/utils/footer/footer';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
    <footer className={s.footer}>
        {icons.map((cur,idx)=> <Image
        src={cur}
        alt={cur}
        width={50}
        height={50}
        key={idx}
        />)}
    </footer>
    </>
  )
}
