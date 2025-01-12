"use client";

import React, { useState } from "react";

function FieldType(): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center cursor-pointer w-24 border-small-rounded-default bg-[var(--grey-background)] hover-default">
      <p className="select-none">hello</p>
    </div>
  );
}

export default FieldType;
