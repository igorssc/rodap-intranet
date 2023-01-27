import clsx from "clsx";
import { UploadSimple } from "phosphor-react";
import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import Zoom from "react-reveal/Zoom";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  legend?: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}

export const Input = ({
  value,
  setValue,
  className,
  label,
  legend,
  ...props
}: InputProps) => {
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.files?.[0] || e.target.value);
  };

  return (
    <>
      <Zoom>
        <label className="text-sm flex flex-col gap-3">
          {label || ""}

          <input
            className={clsx(
              "bg-[#F1F1F1] w-full rounded h-9 px-4",
              props.type === "file" && "hidden",
              className
            )}
            {...(props.type !== "file" && { value: value })}
            {...(props.type === "file" && !value && { value: "" })}
            onChange={changeValue}
            {...props}
            {...(props.type === "file" && { id: "" })}
          />

          {props.type === "file" && (
            <div className="bg-[#F1F1F1] text-[#858585] w-full rounded h-9 px-4 flex gap-3 items-center focus-within:outline focus-within:outline-[2px]">
              <input
                type="text"
                className="w-0 h-0 absolute bg-transparent"
                id={props.id}
              />
              <UploadSimple size={20} weight="bold" />
              {value ? value.name : "Enviar arquivo"}
            </div>
          )}

          {legend && <small className="italic">{legend}</small>}
        </label>
      </Zoom>
    </>
  );
};
