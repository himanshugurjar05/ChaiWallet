"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Login() {
    const { data: session } = useSession()
    if(!session) {
      const router = useRouter
      router.push('/login')
    }
  
  return (
    <div className="text-white py-14 container mx-auto">
      <h1 className="font-bold text-3xl text-center mb-6">
        Login/SignUp to Get your fans to support you
      </h1>

      <div className="flex flex-col items-center gap-4 min-h-screen bg-[#0b0b14] p-10">
        
        {/* Google Button */}
        <button
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48">
            <g fill="none" fillRule="evenodd">
              <path fill="#FBBC05" d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.867 7.262 2.407 10.389l7.905-6.051A13.911 13.911 0 0 1 9.827 24" />
              <path fill="#EB4335" d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094l6.836-6.826C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04C12.355 14.112 17.549 10.133 23.714 10.133" />
              <path fill="#34A853" d="M23.714 37.867c-6.165 0-11.36-3.978-13.182-9.51l-7.909 6.038C6.445 42.156 14.427 47.467 23.714 47.467c5.732 0 11.204-2.035 15.312-5.848l-7.507-5.804c-2.118 1.334-4.785 2.052-7.805 2.052" />
              <path fill="#4285F4" d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.066h12.605c-.63 3.091-2.345 5.468-4.8 7.015l7.507 5.804C43.339 37.614 46.145 31.65 46.145 24" />
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* LinkedIn Button */}
        <button
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 44 44">
            <path fill="#007EBB" d="M746 305h-9.725V290.938c0-3.68-1.521-6.193-4.866-6.193-2.558 0-3.981 1.696-4.643 3.33-.248.586-.21 1.403-.21 2.22V305h-9.634s.124-24.908 0-27.173h9.634v4.265c.57-1.865 3.649-4.526 8.561-4.526 6.095 0 10.884 3.909 10.884 12.326V305zM707.18 274.428c-3.105 0-5.118-2.077-5.118-4.71 0-2.684 2.072-4.718 5.238-4.718 3.164 0 5.11 2.028 5.172 4.71 0 2.633-2.008 4.718-5.292 4.718zm-4.07 3.399h8.576V305h-8.576v-27.173z" transform="translate(-702 -265)" />
          </svg>
          <span>Continue with LinkedIn</span>
        </button>

        {/* Twitter Button */}
        <button
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 48 48">
            <path fill="#00AAEC" d="M348 168.735a23.63 23.63 0 0 1-5.655 1.59c2.034-1.248 3.595-3.227 4.33-5.584a22.47 22.47 0 0 1-6.258 2.448 8.79 8.79 0 0 0-7.187-3.186c-5.434 0-9.844 4.522-9.844 10.098 0 .792.085 1.56.254 2.3-8.185-.422-15.44-4.438-20.3-10.554a10.43 10.43 0 0 0-1.333 5.081c0 3.502 1.738 6.593 4.381 8.404a9.16 9.16 0 0 1-4.463-1.259v.124c0 4.894 3.395 8.977 7.903 9.902a9.06 9.06 0 0 1-2.594.179c.98 3.949 4.614 6.87 8.925 6.948-3.37 2.71-7.618 4.325-12.23 4.325-.794 0-1.58-.046-2.349-.138 4.358 2.86 9.536 4.533 15.095 4.533 18.116 0 28.02-15.385 28.02-28.73 0-.44-.008-.879-.025-1.31A20.06 20.06 0 0 0 348 168.735" transform="translate(-300 -164)" />
          </svg>
          <span>Continue with Twitter</span>
        </button>

        {/* Facebook Button */}
        <button
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#4460A0" d="M225.638 208h-22.989A2.65 2.65 0 0 1 200 205.35v-42.701A2.65 2.65 0 0 1 202.649 160h42.702A2.65 2.65 0 0 1 248 162.649v42.702A2.65 2.65 0 0 1 245.351 208h-12.232v-18.588h6.239l.934-7.244h-7.173v-4.625c0-2.097.582-3.526 3.59-3.526h3.836v-6.48c-.663-.088-2.94-.285-5.589-.285-5.53 0-9.317 3.376-9.317 9.576v5.343h-6.255v7.244h6.255V208z" transform="translate(-200 -160)" />
          </svg>
          <span>Continue with Facebook</span>
        </button>

        {/* GitHub Button */}
        <button
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="black"
              d="M12 0a12 12 0 0 0-3.794 23.403c.6.111.82-.261.82-.579v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.757.082-.742.082-.742 1.205.086 1.84 1.261 1.84 1.261 1.07 1.834 2.809 1.304 3.495.997.108-.795.418-1.304.76-1.604-2.665-.304-5.467-1.336-5.467-5.932 0-1.31.469-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.34 11.34 0 0 1 6.006 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.652.243 2.873.119 3.176.77.839 1.236 1.911 1.236 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .321.218.694.825.576A12 12 0 0 0 12 0z"
            />
          </svg>
          <span>Continue with Github</span>
        </button>

        {/* Apple Button */}
        <button
          className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="black"
              d="M16.365 1.43c0 1.14-.417 2.115-1.25 2.927-.9.896-1.94 1.364-3.105 1.304-.043-1.04.363-1.993 1.222-2.875.435-.446.986-.806 1.654-1.08.667-.274 1.292-.416 1.89-.43.013.051.013.103.013.154zm3.733 17.304c-.38.863-.83 1.652-1.35 2.365-.707.987-1.285 1.67-1.738 2.05-.696.647-1.443.983-2.245.996-.574 0-1.27-.163-2.082-.49-.814-.327-1.564-.49-2.25-.49-.73 0-1.506.163-2.328.49-.823.327-1.472.497-1.946.51-.774.03-1.533-.317-2.273-1.04-.493-.43-1.09-1.14-1.79-2.127-.766-1.06-1.4-2.287-1.9-3.682-.53-1.533-.796-3.01-.796-4.43 0-1.64.35-3.057 1.05-4.257a6.5 6.5 0 0 1 2.414-2.447c1.02-.58 2.124-.875 3.31-.889.65 0 1.504.187 2.563.56 1.057.373 1.74.56 2.05.56.223 0 .98-.24 2.27-.719 1.22-.447 2.25-.633 3.093-.56 2.283.184 3.995 1.14 5.133 2.867-2.04 1.24-3.056 2.977-3.056 5.207 0 1.74.65 3.19 1.95 4.357z"
            />
          </svg>
          <span>Continue with Apple</span>
        </button>

      </div>
    </div>
  );
}
