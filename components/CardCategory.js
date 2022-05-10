import React from 'react'
import Images from 'next/image'
import ForwardIcon from '../assets/images/icon-forward.png'
import DownIcon from '../assets/images/downArrow.png'
import { motion } from "framer-motion";
import {item} from '../utils/motionVariants'
export default function CardCategory({ img, titlCategory }) {
    return (
        <motion.div variants={item} className=' relative w-52 h-54 justify-center cursor-pointer'>
            <div className='flex h-full items-end justify-center z-20'>
                <div className={
                    titlCategory === 'Arcade' ? 'flex items-end shadow-xl  bg-orange-400 shadow-orange-400/50 rounded-lg h-32 w-44' :
                        titlCategory === 'Strategy' ? 'flex items-end shadow-xl bg-rose-500 shadow-rose-400/50 rounded-lg h-32 w-44' :
                            titlCategory === 'Action' ? 'flex items-end shadow-xl bg-emerald-500 shadow-emerald-400/50 rounded-lg h-32 w-44' : null} >
                    <div className='h-20 font-extrabold text-white w-full px-5 flex justify-between items-center'>
                        <h1>
                            {titlCategory}
                        </h1>
                        <button className='bg-forward w-6 h-6 flex items-center justify-center rounded-full'>
                            <Images objectFit="cover" width={12} height={12} src={ForwardIcon} />
                        </button>

                    </div>
                </div>
            </div>
            {!img &&
                <React.Fragment>
                    <div className='absolute top-16 mx-auto left-4 -z-0 flex items-end shadow-xl bg-blue-500  rounded-lg h-32 w-44' />
                    <div className='absolute top-18 left-4 mx-auto -z-0 flex items-end shadow-xl bg-emerald-500 rounded-lg h-32 w-44' />
                    <div className='absolute top-22 mx-auto left-4 -z-0 flex items-end shadow-xl bg-purple-500  shadow-purple-400/50 rounded-lg h-32 w-44' >
                        <div className='h-20 font-extrabold text-white w-full px-5 flex justify-between items-center'>
                            <h1>
                                {titlCategory}
                            </h1>
                            <button className='bg-forward w-6 h-6 flex items-center justify-center rounded-full'>
                                <Images className='object-center' width={18} height={20} src={DownIcon} />
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            }
            {img &&
                <div className='absolute top-0 mx-auto left-custom'>
                    <div className='bg-forward rounded-full flex items-center justify-center'>
                        <Images className='object-cover bg-red-50 rounded-lg' height={140} width={140} src={img} />
                    </div>
                </div>}
        </motion.div>
    )
}