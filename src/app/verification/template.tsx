"use client"
import React from 'react'
import {easeIn,motion} from "framer-motion"
export default function Template({children}:{
    children:React.ReactNode
}) {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,y:0,transition:{duration:0.45,ease:easeIn}}}
    >
        {children}
    </motion.div>
  )
}
