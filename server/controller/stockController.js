import axios from 'axios';
const getPrices = async (req, res) => {
    try{
        const axiosConfig = {
            headers: {
                ['X-RapidAPI-Host']: 'apidojo-yahoo-finance-v1.p.rapidapi.com',
                ['X-RapidAPI-Key']: '33692acecamshe3a73dae3220178p1fdc8fjsn65003cd48dfe'
            }
        }
        const response = await axios.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=BAC%2CKC%3DF%2C002210.KS%2CIWM%2CAMECX`, axiosConfig);
        const { result, error } = response.data.quoteResponse;
        if(error){
            return res.status(400).send({ message: error });
        }
        return res.status(200).send({ prices: result });
    } catch (err) {
        return res.status(500).send({ message: 'Could not get prices right now please try again later' });
    }
};

export default { getPrices };