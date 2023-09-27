import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type ButtonProps = {
  id?: string;
  label: string;
  route: string;
  className: string;
  target: string;
  index?: number;
}

export default function Button({id, index, label, route, className, target }: ButtonProps) {
  const path = usePathname();
  return (
    <>
        <Link id={id} tabIndex={index} href={route} target={target} className={className}>
          {route === path && (
            <motion.span id='span' layoutId='underline' className='absolute left-0 top-full block h-[1px] w-full bg-slate-300' />
          )}

          
          {label}
        </Link>
    </>
  )
}





