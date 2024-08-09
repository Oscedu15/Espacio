import React from 'react'
import {motion} from "framer-motion";
import { FADE } from '@/lib/data';

interface Props {
    children : React.ReactNode;
}


function MotionDiv({children} : Props) {
  return (
    // Math.random Devuelve un número pseudo-aleatorio entre 0 y 1.
    <motion.div key={Math.random().toString()} variants={FADE} initial="hidden"
    animate="visible" exit="exit">{children}</motion.div>
  )
}

export default MotionDiv