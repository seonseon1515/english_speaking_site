
import React, { Component } from 'react';
import TextEditor from '../TextEditor';
import { useState } from 'react';



export default function WriteComponent() {
  const [data, setData] = useState("");
  return (
    <div>
        <TextEditor setData={setData} />
    </div>
)
  }
