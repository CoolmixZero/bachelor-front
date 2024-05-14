// "use client"

// import { useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export const models = [
//   "resnet18",
//   "resnet50",
// ];

// interface SelectModelProps {
//   selectedModel: string;
//   setModel: (model: string) => void;
// }

// const SelectModel = ({selectedModel, setModel} : SelectModelProps)  => {
//   return (
//     <Select>
//       <SelectTrigger className="w-[150px]">
//         <SelectValue placeholder="Model" />
//       </SelectTrigger>
//       <SelectContent>
//         {models.map((model, index) => (
//         <>
//           <SelectItem
//             key={index}
//             value={model}
//             onClick={() => setModel(model)}
//           >
//             {model}
//           </SelectItem>
//           </>
//         ))}
//       </SelectContent>
//     </Select>    
//   )
// }

// export default SelectModel