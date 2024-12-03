// testdb.ts

/**
 * Utility functions to handle server actions.
 */

import { getDataApi, postDataApi, patchDataApi, deleteDataApi } from './fetchData';

// types of individual tables
type profileTypes = {
    name: string;
    tradeId: number;
};

export type tradeTypes = {
    id: number,
    transaction_type: string,
    gross_amount: number,
    net_result: number,
    entry_id: string,
    operation_type: string,
    value: number,
    profit_or_loss: string,
    identifier: string,
    outcome: string,
    trade_company: string
};

// Server base url
const URI = `http://localhost:3000`

/**
 * Function to fetch all trade data from the server.
 * @returns A promise resolving to an array of trades or undefined if no data is retrieved.
 */
export const getAllTrades = async () => {
    try {
        // Send a GET request to the /trades endpoint to fetch all trades
        const trades: tradeTypes[] = await getDataApi(`${URI}/trades`);

        // If no trades are returned, exit the function and return undefined
        if (!trades) {
            return;
        }

        // Return the list of trades fetched from the server
        return trades;
    } catch (error) {
        // Log any error that occurs during the GET request
        console.error('Error fetching trades:', error);

        // Optionally, you can rethrow the error here if needed for further handling
        throw error;
    }
};

/**
 * Function to fetch a specific trade by ID from the server.
 * @param tradeId - The unique ID of the trade to fetch.
 * @returns A promise resolving to the trade object or undefined if not found.
 */
export const getTradeById = async (tradeId: string) => {
    try {
        // Make a GET request to the /trades/{tradeId} endpoint to fetch the specific trade
        const trade: tradeTypes = await getDataApi(`${URI}/trades/${tradeId}`);

        // If the trade is not found, return undefined
        if (!trade) {
            return;
        }

        // Return the fetched trade object
        return trade;
    } catch (error) {
        // Log any error that occurs during the GET request
        console.error('Error fetching trade by ID:', error);

        // Rethrow the error to allow further handling by the caller
        throw error;
    }
};


/**
 * Function to post trade data to the server.
 * @param tradeData - An object containing trade details to be sent in the request body.
 * @returns A promise resolving to the newly created trade or undefined if the operation fails.
 */
export const postTrade = async (tradeData: Partial<tradeTypes>) => {
    try {

        // Fetching last record id used and incrementing it by 1
        const profile: profileTypes = await getDataApi(`${URI}/profile`);
        const lastTradeId = profile.tradeId + 1

        // Updating the record id
        const updatedTradeData = { ...tradeData, id: lastTradeId }

        // Make a POST request to the /trades endpoint with the provided trade data
        const newTrade = await postDataApi(`${URI}/trades`, updatedTradeData);

        // If the server response does not contain a valid trade, return undefined
        if (!newTrade) {
            return;
        }

        // Updating trade Id to profile
        await patchDataApi(`${URI}/profile`, { ...profile, tradeId: lastTradeId });

        // Return the newly created trade object
        return newTrade;
    } catch (error) {
        // Log any error that occurs during the POST request
        console.error('Error posting trade data:', error);

        // Rethrow the error to allow further handling by the caller
        throw error;
    }
};

/**
 * Function to update a trade on the server.
 * @param tradeId - The ID of the trade to update.
 * @param tradeData - An object containing the updated trade details.
 * @returns A promise resolving to the updated trade or undefined if the operation fails.
 */
export const patchTrade = async (tradeId: string, tradeData: unknown) => {
    try {
        // Make a PATCH request to the /trades/{tradeId} endpoint with the updated trade data
        const updatedTrade = await patchDataApi(`${URI}/trades/${tradeId}`, tradeData);

        // If the server response does not contain the updated trade, return undefined
        if (!updatedTrade) {
            return;
        }

        // Return the updated trade object
        return updatedTrade;
    } catch (error) {
        // Log any error that occurs during the PATCH request
        console.error('Error updating trade:', error);

        // Rethrow the error to allow further handling by the caller
        throw error;
    }
};

/**
 * Function to delete a trade from the server.
 * @param tradeId - The ID of the trade to delete.
 * @returns A promise resolving to the server's response or undefined if the operation fails.
 */
export const deleteTrade = async (tradeId: string) => {
    try {
        // Make a DELETE request to the /trades/{tradeId} endpoint
        const deleteResponse = await deleteDataApi(`${URI}/trades/${tradeId}`);

        // If the server response does not indicate a successful deletion, return undefined
        if (!deleteResponse) {
            return;
        }

        // Return the server's response after deletion
        return deleteResponse;
    } catch (error) {
        // Log any error that occurs during the DELETE request
        console.error('Error deleting trade:', error);

        // Rethrow the error to allow further handling by the caller
        throw error;
    }
};
