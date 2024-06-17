import axiosInstance from '../axiosInstance';

export const getLanguages = async (token) => {
    try {
        const response = await axiosInstance.get('/questions/languages/', {
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

export const getSpecificities = async (token) => {
    try {
        const response = await axiosInstance.get('/questions/specificities/', {
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

export const getLevels = async (token) => {
    try {
        const response = await axiosInstance.get('/questions/levels/', {
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

export const getYears = async (token) => {
    try {
        const response = await axiosInstance.get('questions/years/', {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting years:', error);
        throw error;
    }
};

export const getSubjects = async (token) => {
    try {
        const response = await axiosInstance.get('questions/subjects/', {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting years:', error);
        throw error;
    }
};

export const getSystems = async (token) => {
    try {
        const response = await axiosInstance.get('questions/systems/', {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting years:', error);
        throw error;
    }
};


export const getTopics = async (token) => {
    try {
        const response = await axiosInstance.get('questions/topics/', {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting topics:', error);
        throw error;
    }
};

export const createExamJourney = async (token, examData) => {
    try {
        const response = await axiosInstance.post('questions/create-exam-journey/',
            examData, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
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

export const getExamJourney = async (token, examId) => {
    try {
        const response = await axiosInstance.get(`questions/exam-journeys/${examId}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting exam:', error);
        throw error;
    }
};

export const getUserHistoryExams = async (token) => {
    try {
        const response = await axiosInstance.get(`questions/exam-journeys/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error getting exam:', error);
        throw error;
    }
};

export const deleteExamJourney = async (token, examId) => {
    try {
        const response = await axiosInstance.delete(`questions/exam-journeys/${examId}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting topics:', error);
        throw error;
    }
};

export const getFavouritesLists = async (token) => {
    try {
        const response = await axiosInstance.get('questions/favorites/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
        return response.data;
    } catch (error) {
        console.error('Error create exam:', error);
        throw error;
    }
};

export const deleteFavouritesList = async (token, listId) => {
    try {
        const response = await axiosInstance.delete(`questions/favorites/${listId}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error create exam:', error);
        throw error;
    }
};

export const getSingleFavouritesListDetails = async (token, listId) => {
    try {
        const response = await axiosInstance.get(`questions/favorites/${listId}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error create exam:', error);
        throw error;
    }
};
