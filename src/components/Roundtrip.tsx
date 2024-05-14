import React from 'react';
import Image from 'next/image';

// Define props type for FormField component
interface FormFieldProps {
  imageSrc: string;
  placeholderText: string;
}

// FormField component as a functional component
const FormField: React.FC<FormFieldProps> = ({ imageSrc, placeholderText }) => {
  return (
    <div className="mt-4 mr-4">
      <div className="border-2 pl-3 rounded-md py-3 flex gap-4">
        <Image src={imageSrc} alt="flight" height={200} width={200} className="w-[30px]" />
        {/* Apply custom styles to input */}
        <input
          type="text"
          placeholder={placeholderText}
          className="focus:outline-none border-none focus:border-transparent"
        />
      </div>
    </div>
  );
};

// RoundTripComponent as a functional component
const RoundTripComponent: React.FC = () => {
  return (
    <div className='mt-10'>
      {/* Render multiple instances of FormField with different props */}
      <FormField imageSrc="/Vector2.svg" placeholderText="Flying from" />
      <FormField imageSrc="/departure.svg" placeholderText="Destination to" />
      <FormField imageSrc="/departuredate.svg" placeholderText="Departure Date" />
      <FormField imageSrc="/departuredate.svg" placeholderText="Return Date" />
      <FormField imageSrc="/Person Icon.png" placeholderText="3" />
      <FormField imageSrc="/Person Icon.png" placeholderText="Economy" />
    </div>
  );
};

export default RoundTripComponent;
