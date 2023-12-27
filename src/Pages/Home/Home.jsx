import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// Define animation configuration
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const HomePage = () => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
        >
            <section className='bg-hero-bg bg-cover bg-center h-screen pt-20 pb-10 lg:px-12 md:px-5 px-4'>
                <div className="text-white">
                    <h1 className="text-3xl">
                        Hello World!
                    </h1>
                    <Link to="signup" className="btn btn-neutral mt-10">
                        Get Started
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}

export default HomePage