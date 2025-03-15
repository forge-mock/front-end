"use client";

import { Switch, SwitchProps } from "react-aria-components";

interface ToggleProps extends SwitchProps {
  text: string;
  classes?: string;
}

function Toggle({ text, classes, ...props }: ToggleProps) {
  return (
    <div className={classes}>
      <Switch className="group text-black size-6" {...props}>
        {text}
        <div className="flex h-[26px] w-[44px] shrink-0 cursor-pointer rounded-full shadow-inner bg-clip-padding border border-solid border-white/30 p-[3px] box-border transition duration-200 ease-in-out bg-violet-500 group-pressed:bg-violet-700 group-selected:bg-violet-800 group-selected:group-pressed:bg-violet-900 outline-hidden group-focus-visible:ring-2 ring-black">
          <span className="h-[18px] w-[18px] transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out translate-x-0 group-selected:translate-x-[100%]" />
        </div>
      </Switch>
    </div>
  );
}

export default Toggle;
