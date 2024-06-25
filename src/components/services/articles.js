import axiosInstance from "@/components/axiosInstance";

export const getAllArticles = async () => {
    try {
        const response = await axiosInstance.get('/articles/');
        return response.data;
    } catch (error) {
        console.error('Error create exam:', error);
        throw error;
    }
};