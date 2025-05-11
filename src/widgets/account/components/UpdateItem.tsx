import React from "react";

interface UpdateItemProps {
  title: string;
  children: React.ReactNode;
}

function UpdateItem({ title, children }: Readonly<UpdateItemProps>): React.JSX.Element {
  return (
    <div className="flex flex-col items-center h-[450px] w-[450px] gap-5 mt-5 p-5 border-default">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

export default UpdateItem;
