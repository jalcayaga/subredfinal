
import { motion } from "framer-motion";

const Button = ({ styles }) => (
  <motion.button
    animate={{
      x: [-15, 130],
      opacity: [0, 1],
    }}
    whileHover={{
      scale: 1.1,
      textShadow: "0px 0px 0.2px rgb(255, 255, 255)",
      color: "#fff",
      // background: "#00f6ff", // Cambia el color de fondo en hover
    }}
    whileTap={{ scale: 1.3 }}
    type="button"
    className={`py-4 px-7 font-poppins font-medium text-[14px] bg-green-gradient border-0 border-black rounded-[15px] cursor-pointer ${styles}`}
  >
    Saber más
  </motion.button>
);

export default Button;

