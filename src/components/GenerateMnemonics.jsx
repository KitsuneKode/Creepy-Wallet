import { useState } from "react";
import { generateRandom } from "./scripts/solana";
import Grid from "./Grid";
import KeyAlert from "./ui/keyAlert";
import PropTypes from "prop-types";

const GenerateMnemonics = ({ isDarkMode, mnemonic, setMnemonic }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-8 pt-0">
        <h1
          className={`text-2xl font-bold ${
            isDarkMode ? " text-gray-300" : "text-gray-700"
          } mb-4 ml-9`}
        >
          Secret Phrase
        </h1>
        <button
          onClick={async () => {
            const newMnemonic = await generateRandom();
            setMnemonic(newMnemonic);
            if (count == 0) {
              setAlertMessage(
                "Your Private Key/Seed Phrase is the only way to recover your account. Never Share them with anyone "
              );
              setCount(1);
            }
            // console.log(mnemonic);
          }}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-600 transition duration-300 transform hover:scale-105"
        >
          Generate Secret Phrase
        </button>

        <KeyAlert message={alertMessage} onClose={() => setAlertMessage("")} />
      </div>

      <Grid mnemonic={mnemonic} count={count} isDarkMode={isDarkMode}></Grid>
    </>
  );
};

GenerateMnemonics.propTypes = {
  mnemonic: PropTypes.string,
  setMnemonic: PropTypes.func,
  isDarkMode: PropTypes.bool,
};

export default GenerateMnemonics;
