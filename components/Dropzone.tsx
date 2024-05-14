"use client"

import Image from 'next/image';
import React from 'react';
import {useDropzone} from 'react-dropzone';

const Dropzone = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={(file as any).path}>
      {(file as any).path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="flex flex-col font-sans">
      <div {...getRootProps({
        className: 'flex flex-col items-center p-20 border-2 border-dashed border-gray-300 text-muted-foreground transition duration-300 hover:border-blue-400 focus:border-blue-500'
      })}>
        <input {...getInputProps()} />
        <p className='text-base'>Drag &apos; drop some files here, or click to select files</p>
      </div>
      <aside className='py-3'>
        <h2 className='text-xl font-bold'>Uploaded Files:</h2>
        <ul>{files}</ul>
        {/* <Image src={files[0]} alt='Image preview' width={500} height={350}/> */}
      </aside>
    </section>
  );
}

export default Dropzone