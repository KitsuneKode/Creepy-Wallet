// Grid.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ui/ToggleButton";
import NotificationBar from "./NotificationBar";
import PropTypes from "prop-types";

const CopyButton = ({ onClick, variants }) => (
  <motion.div className="col-span-full flex justify-end" variants={variants}>
    <button
      onClick={onClick}
      className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition duration-300"
    >
      Copy Grid
    </button>
  </motion.div>
);

const GridItem = ({ item, variants }) => (
  <motion.div
    className="bg-gray-800 text-gray-300 flex justify-center items-center h-14 rounded-lg border border-gray-600 shadow-lg hover:bg-gray-700 hover:border-gray-400 hover:shadow-xl transition-all duration-300"
    variants={variants}
  >
    {item}
  </motion.div>
);

const Grid = ({ mnemonic, isDarkMode }) => {
  const [showGrid, setShowGrid] = useState(false); // Hidden by default
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowGrid(true);
  }, [mnemonic]);

  // const items = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);
  let items;
  if (mnemonic == "") {
    items = [];
  } else {
    items = mnemonic.trim().split(" ");
  }

  // console.log(items);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(items.join(", ")).then(() => {
      setShowNotification(true);
    });
  };

  const timer = 3;
  const toggleGrid = () => setShowGrid((prev) => !prev);
  const handleCloseNotification = () => setShowNotification(false);

  return (
    <>
      <div
        className={`p-4 rounded-lg w-full max-w-screen-lg relative ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {
          <ToggleButton
            isDarkMode={isDarkMode}
            showGrid={showGrid}
            onToggleGrid={toggleGrid}
          />
        }

        {showGrid && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {items.map((item) => (
              <GridItem key={item} item={item} variants={itemVariants} />
            ))}
            <CopyButton onClick={handleCopy} variants={itemVariants} />
          </motion.div>
        )}
      </div>

      {showNotification && (
        <NotificationBar
          message={"Secret Phrase Copied"}
          timer={timer}
          onClose={handleCloseNotification}
        />
      )}
    </>
  );
};

Grid.propTypes = {
  mnemonic: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
};

GridItem.propTypes = {
  item: PropTypes.string,
  variants: PropTypes.containerVariants,
};

CopyButton.propTypes = {
  onClick: PropTypes.func,
  variants: PropTypes.containerVariants,
};

export default Grid;
