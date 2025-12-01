import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';

// API Function
const registerUser = async (data: any) => {
  const response = await axios.post('http://localhost:3000/user/register', data);
  return response.data;
};

export default function Register() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // React Query Mutation
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setSuccessMsg("Registration Successful! You can now login.");
      setErrorMsg('');
      reset(); // Clear form
    },
    onError: (error: AxiosError<any>) => {
      setSuccessMsg('');
      const message = error.response?.data?.message || "Registration failed";
      // Handle array of errors from NestJS ValidationPipe
      if (Array.isArray(message)) {
        setErrorMsg(message.join(', '));
      } else {
        setErrorMsg(message);
      }
    }
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create Account</h2>
      
      {successMsg && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
          {successMsg}
        </div>
      )}
      
      {errorMsg && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
            type="email" 
            placeholder="user@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{String(errors.email.message)}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })} 
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
            type="password" 
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{String(errors.password.message)}</p>}
        </div>

        <button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
        >
          {mutation.isPending ? 'Registering...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}