import React from "react";

interface UpdateItemProps {
  title: string;
  children: React.ReactNode;
}

function UpdateItem({ title, children }: Readonly<UpdateItemProps>): React.JSX.Element {
  return (
    <div className="flex flex-col items-center w-full gap-5 mt-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

export default UpdateItem;
