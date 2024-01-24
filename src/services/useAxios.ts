import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ref, Ref } from 'vue';

// Create an instance of Axios with common configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});

// Define a hook to encapsulate Axios-related logic
export function useAxios() {
  const loading: Ref<boolean> = ref(false);

  // Function to make an Axios GET request
  const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
      loading.value = true;
      const response = await axiosInstance.get<T>(url);
      return response;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };
  return {
    loading,
    get,
  };
}
