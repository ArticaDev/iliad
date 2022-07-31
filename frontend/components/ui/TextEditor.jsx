import React, { useState } from "react";
import dynamic from 'next/dynamic';
import axios from "axios";
import { Autosave } from "react-autosave";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const updateText = (data) => axios.post("localhost:3001/text", { text: data });

const TextEditor = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <ReactQuill
        className="lg:w-[800px]"
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Write your story here..."
      />
      <Autosave data={value} onSave={updateText} />
    </>
  );
};

export default TextEditor;