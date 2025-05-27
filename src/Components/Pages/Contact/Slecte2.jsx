import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

// const Sahaped = ({
//   name,
//   onBlur,
//   value,
//   options,
//   onChange,
//   isLoading = false,

//   isMulti,
// }) => {
//   return (
//     <>
//       <Select
//         value={value}
//         onBlur={() => {
//           onBlur(name, true);
//         }}
//         className="mt-4"
//         name={name}
//         onChange={(opt) => {
//           const finalValue = isMulti
//             ? opt
//               ? opt.map((o) => o.value)
//               : []
//             : opt?.value || "";
//           onChange(name, finalValue);
//         }}
//         options={options}
//         placeholder="Select an option"
//         isClearable={isMulti ? false : true}
//         isMulti={isMulti}
//         isLoading={isLoading}
//       />
//     </>
//   );
// };

// export default Sahaped;

const Creatable = ({
  name,
  onBlur,
  value,
  options,
  onChange,
  isMulti = false,
  isClearable = false,
  // isLoading = false,
}) => {
  return isClearable === true ? (
    <CreatableSelect
      value={value}
      onBlur={() => onBlur(name, true)}
      name={name}
      onChange={(opt) => {
        if (Array.isArray(opt)) {
          onChange(
            name,
            opt.map((o) => o.value)
          );
        } else {
          onChange(name, opt?.value || "");
        }
      }}
      options={options}
      placeholder="Select or create..."
      isClearable={isClearable}
      isMulti={isMulti}
    />
  ) : (
    <Select
      value={value}
      onBlur={() => {
        onBlur(name, true);
      }}
      className="mt-4"
      name={name}
      onChange={(opt) => {
        const finalValue = isMulti
          ? opt
            ? opt.map((o) => o.value)
            : []
          : opt?.value || "";
        onChange(name, finalValue);
      }}
      options={options}
      placeholder="Select an option"
      isClearable={isClearable}
      isMulti={isMulti}
      // isLoading={isLoading}
    />
  );
};
export default Creatable;
