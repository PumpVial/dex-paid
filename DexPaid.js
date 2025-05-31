import axios from "axios";

/////////////////////////////// CONFIG //////////////////////////////////////
const API_KEY = process.env.PUMPVIAL_API_KEY;
const ca = "7iagMTDPfNSR5zVcERT1To7A9eaQoz58dJAh42EMHcCC";
//////////////////////////////// END ////////////////////////////////////////

const checkDexPaid = async () => {
  const URL = "https://api.pumpvial.com/dex-paid";

  try {
    const request = await axios.post(
      URL,
      { ca },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );

    const { dexPaid } = request.data;
    console.log(`DEX Paid: ${dexPaid}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

checkDexPaid();
