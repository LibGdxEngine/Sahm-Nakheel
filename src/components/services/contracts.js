import axiosInstance from '../axiosInstance';

export const getTransactions = async (token, query='') => {
    try {
        const response = await axiosInstance.get(`/contracts/user-transactions/?${query}`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getContracts = async (token) => {
    try {
        const response = await axiosInstance.get('/contracts/user-contracts/', {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};


export const getAllPlans = async () => {
    try {
        const response = await axiosInstance.get('/landing_page/investment-plans/');
        return response.data;
    } catch (error) {
        console.error('Error create exam:', error);
        throw error;
    }
};

export const updateExamJourney = async (token, examId, examData) => {
    try {
        const response = await axiosInstance.patch(`questions/update-exam-journey/${examId}/`,examData, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error update exam:', error);
        throw error;
    }
};
