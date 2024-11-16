import {
    motion,
    useScroll,
    useTransform
} from "framer-motion"
export default function MotionFadeIn({children}) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1, 0.5, 0]
    )
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{opacity: 1, y: 0 }}
            transition={{duration: 0.8, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}