"use client"
import React from 'react'
import { easeIn, motion} from "framer-motion"
export default function Template({children}:{
    children:React.ReactNode
}) {
  return (
    <motion.div
    // initial={{opacity:0.8}}
    // animate={{opacity:1}}
    >
        {children}
    </motion.div>
  )
}
