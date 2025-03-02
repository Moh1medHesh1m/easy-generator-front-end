import React from 'react';

export default function ErrorText({ errorMessage }: { errorMessage: string }) {
  return <span className="text-left  text-red-500">{errorMessage}</span>;
}
