import pen from "../assets/pen.svg";
import trash from "../assets/trash.svg";

const CrudTableRow = ({ elm, setDataToEdit, deleteData }) => {
   const { id, name, dni, mail } = elm;
   return (
      <tr className="bg-azulCla/20 border-b border-verdeOsc dark:border-blue-700/70">
         <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
         >
            {name}
         </th>
         <td className="px-6 py-4">{dni}</td>
         <td className="px-6 py-4">{mail}</td>
         <td className="px-6 py-4 flex flex-col md:flex-row justify-evenly space-x-2">
            <img
               src={pen}
               alt="Edit"
               className="w-4 cursor-pointer"
               onClick={() => setDataToEdit(elm)}
            ></img>
            <img
               src={trash}
               alt="Delete"
               className="w-4 cursor-pointer"
               onClick={() => deleteData(id)}
            ></img>
         </td>
      </tr>
   );
};

export default CrudTableRow;
